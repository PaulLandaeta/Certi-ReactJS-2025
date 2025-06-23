import { carrer } from "./Carrer";

export const Profile = () => {
  return (
    <>
      <div>Nombre:</div>
      <div>Paul landaeta</div>
    </>
  );
};

export const ProfileWithCarrer = carrer(Profile);


