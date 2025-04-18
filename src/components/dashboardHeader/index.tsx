const DashboardHeader = () => {
  return (
    <div className="whitebg px-10 relative flex items-center justify-between h-20">
      <div className="w-6" />

      <div className="absolute left-1/2 -translate-x-1/2 transform">
        <h5 className="text-3xl m-0">
          Welcome to{' '}
          <span className="themetext font-semibold">
            ESGroadmap User Portal
          </span>
        </h5>
      </div>

      <div className="flex gap-2 items-center">
        <img
          src={'/icons/user.svg'}
          className="cursor-pointer h-5 w-5"
          alt="userProfile"
        />
        <p className="m-0 text-lg">User Name</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
