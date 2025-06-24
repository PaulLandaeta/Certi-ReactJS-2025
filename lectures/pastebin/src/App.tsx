import React, { useEffect, useRef, useState } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { io } from 'socket.io-client';
import { oneDark } from '@codemirror/theme-one-dark';

export default function App() {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const socketRef = useRef(null);
  const [language, setLanguage] = useState('javascript');
  const [title, setTitle] = useState('');

  // Crear conexión WebSocket
  useEffect(() => {
    socketRef.current = io('http://localhost:3001');

    socketRef.current.on('code:update', ({ content }) => {
      const view = viewRef.current;
      if (!view) return;
      const current = view.state.doc.toString();
      if (content !== current) {
        const transaction = view.state.update({
          changes: { from: 0, to: current.length, insert: content }
        });
        view.dispatch(transaction);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Inicializar CodeMirror
  useEffect(() => {
    if (viewRef.current) {
      viewRef.current.destroy();
    }

    const lang = language === 'python' ? python() : javascript();
    const view = new EditorView({
      doc: '',
      extensions: [
        basicSetup,
        lang,
        oneDark,
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            const content = update.state.doc.toString();
            socketRef.current.emit('code:update', { content });
          }
        })
      ],
      parent: editorRef.current
    });

    viewRef.current = view;

    return () => {
      view.destroy();
    };
  }, [language]);

  return (
    <div style={{ padding: '2rem', background: '#1e1e1e', color: 'white', height: '100vh' }}>
      <h1>{title || 'untitled'}</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
      </select>
      <div ref={editorRef} style={{ marginTop: '1rem', height: '400px', backgroundColor: '#2e2e2e' }} />
      <button style={{ marginTop: '1rem' }}>Publish</button>
    </div>
  );
}
