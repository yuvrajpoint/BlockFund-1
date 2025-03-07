export default () => {
  const footerNavs = [
    { name: "Terms" },
    { name: "License" },
    { name: "Privacy" },
    { name: "About us" },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <img src="/RetZer.png" className="w-32 sm:mx-auto" />
          <p>
            "Crafted with dedication by the students of MBM, we are Team
            ReturnZero—signing off with pride."
          </p>
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2025 BlockFund Inc. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            <li className="text-gray-800 hover:text-gray-500 duration-150">
              <a href="#">Terms</a>
            </li>
            <li className="text-gray-800 hover:text-gray-500 duration-150">
              <a href="#">License</a>
            </li>
            <li className="text-gray-800 hover:text-gray-500 duration-150">
              <a href="#">Privacy</a>
            </li>
            <li className="text-gray-800 hover:text-gray-500 duration-150">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
