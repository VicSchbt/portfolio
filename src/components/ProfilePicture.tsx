import profilePicture from "/images/profile-picture.jpg";
import goodVibes from "/images/good-vibes.png";
import yellowScotch from "/images/scotch-yellow.png";

const ProfilePicture = () => {
  return (
    <div className="bg-white rounded-3xl p-5 pb-10 relative">
        <img src={profilePicture} alt="Profile Picture" className="w-full h-full object-cover rounded-xl" />
        <img src={goodVibes} alt="Good Vibes" className="absolute -bottom-5 -right-10 w-1/2 rotate-12" />
        <img src={yellowScotch} alt="Yellow Scotch" className="absolute -top-20 -left-10 w-1/2 rotate-12" />
    </div>
  )
}

export default ProfilePicture