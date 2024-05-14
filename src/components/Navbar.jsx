import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center bg-black text-white shadow-lg px-4 py-2"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <img
        src="./logo.png"
        alt="SecretDesires Logo"
        className="h-8 mr-4 bg-transparent"
      />

      <ul className="flex space-x-4 cursor-pointer ">
        <li className="flex items-center gap-2 px-2 hover:border-b-2  border-gray-800 border-opacity-50 hover:border-rose-500 transition duration-300 ease-in-out">
          <Icon icon="bi:chat-right-dots-fill" />
          Chat
        </li>
        <li className="flex items-center gap-2 px-2 hover:border-b-2  border-gray-800 border-opacity-50 hover:border-rose-500 transition duration-300 ease-in-out">
          <Icon icon="streamline:user-multiple-group-solid" />
          My Characters
        </li>
        <li className="flex items-center gap-1 px-2 hover:border-b-2  border-gray-800 border-opacity-50 hover:border-rose-500 transition duration-300 ease-in-out">
          <Icon icon="mdi:camera" />
          Generate Image
        </li>
        <li className="flex items-center ">
          <img src="./button.png" alt="" className="hidden md:block" />
        </li>
      </ul>

      <div className="flex items-center bg-transparent">
        <Icon icon="iconamoon:profile-circle-fill" />
        <span className="mr-2 text-gray-200">My Profile</span>
        <Icon icon="gridicons:dropdown" />
      </div>
    </div>
  );
};

export default Navbar;
