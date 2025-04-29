import Logo from "./Logo";

export function Footer() {
  return (
    <div className="w-full p-10 mt-10 bg-gray-900">
      <div className="shadow-inner container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex title-font font-medium items-center md:justify-start justify-center cursor-pointer">
            <div className="w-10 h-10 m-1">
              <Logo></Logo>
            </div>{" "}
            <span className="text-xl align-middle inline-block">Adruinmenon Bot</span>
          </div>{" "}
          <p className="mt-2 text-sm">
            Discord moderation and security that is always one step ahead
          </p>
        </div>{" "}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-end">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              Useful Links
            </h2>{" "}
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a
                    className="nav-item svelte-17ej2r8"
                    href="#"
                  >
                    Add Adruinmenon
                  </a>{" "}
                </li>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="/premium">
                    Premium
                  </a>{" "}
                </li>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="/premium">
                    VIP
                  </a>{" "}
                </li>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="/reviews">
                    Reviews
                  </a>{" "}
                </li>
              </ul>
            </nav>{" "}
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              Resources
            </h2>{" "}
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="#">
                    Team
                  </a>{" "}
                </li>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="#">
                    Updates
                  </a>{" "}
                </li>
                <li>
                  <a
                    className="nav-item svelte-17ej2r8"
                    href="https://docs.Adruinmenon.bot"
                  >
                    Documentation
                  </a>{" "}
                </li>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="/support">
                    Support
                  </a>{" "}
                </li>
              </ul>
            </nav>{" "}
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              Legal
            </h2>{" "}
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="/legal/tos">
                    Terms Of Service
                  </a>{" "}
                </li>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="/legal/privacy">
                    Privacy Policy
                  </a>{" "}
                </li>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="/legal/refund">
                    Refund Policy
                  </a>{" "}
                </li>
                <li>
                  <a className="nav-item svelte-17ej2r8" href="/legal/cookies">
                    Cookies Policy
                  </a>{" "}
                </li>
              </ul>
            </nav>{" "}
          </div>
        </div>
      </div>{" "}
      <div className="bg-base-300">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
          <p className="text-sm text-center sm:text-left">
            © Adruinmenon Bot 2019-2025. All rights reserved.
          </p>{" "}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start ">
            <a href="/" className="text-gray-500">
              <i className="fab fa-facebook-f"></i>
            </a>{" "}
            <a href="/" className="ml-3 text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>{" "}
            <a href="/" className="ml-3 text-gray-500">
              <i className="fab fa-linkedin-in"></i>
            </a>{" "}
            <a href="/" className="ml-3 text-gray-500">
              <i className="fab fa-youtube"></i>
            </a>{" "}
            <a href="/" className="ml-3 text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
