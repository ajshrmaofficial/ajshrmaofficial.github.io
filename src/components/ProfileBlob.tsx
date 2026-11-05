import profileImage from "../assets/jpg/profile.jpg";

function ProfileBlob() {
  return (
    <div className="aspect-square w-40 shrink-0 animate-morph overflow-hidden bg-accent/10 motion-reduce:animate-none motion-reduce:rounded-[40%] sm:w-52">
      <img
        src={profileImage}
        alt="Portrait of Ajay Sharma"
        className="h-full w-full object-cover object-[40%_30%]"
      />
    </div>
  );
}

export default ProfileBlob;
