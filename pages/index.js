import { Fragment, useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);

  const toggleMenu = () => {
    setState((prevState) => {
      return !prevState;
    });
  };

  return (
    <Fragment>
      <div
        className="bg-no-repeat bg-center bg-cover md:h-screen"
        style={{ backgroundImage: "url('./images/banner-image.png')" }}
      >
        <header className="py-5 relative">
          <div className="custom-container flex flex-row justify-between items-center">
            <a href="#" className="block lg:hidden">
              <img src="./images/logo.png" className="w-full" alt="" />
            </a>
            <div
              className={`${
                state === true ? "block" : "hidden"
              } w-full lg:block transition delay-75`}
            >
              <nav className={`navbar`}>
                <ul className="navbar-wrapper">
                  <li className="hidden lg:block">
                    <a href="#">
                      <img src="./images/logo.png" className="w-full" alt="" />
                    </a>
                  </li>
                  <li className="py-2 lg:py-0">
                    <a href="#" className="nav-link active">
                      SPEED DATING BARCELONA
                    </a>
                  </li>
                  <li className="py-2 lg:py-0">
                    <a href="#" className="nav-link">
                      ¿QUÉ ES UN SPEED DATING?
                    </a>
                  </li>
                  <li className="py-2 lg:py-0">
                    <a href="#" className="nav-link">
                      CITAS CON AFINIDAD
                    </a>
                  </li>
                  {/* <li className="block lg:hidden py-2 lg:py-0">
              <a href="#" className="text-gray-400 transition delay-75">
                Contact
              </a>
            </li> */}
                </ul>
              </nav>
            </div>

            {/* Hamburger Icon */}
            <button
              id="menu-btn"
              className={`block hamburger lg:hidden focus:outline-none ${
                state && "open"
              }`}
              onClick={toggleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
            {/* <a
          href="#"
          className="bg-gray-300 py-1 px-9 rounded-full text-base font-bold transition delay-75 hidden md:block hover:bg-gray-400"
        >
          Login
        </a> */}
          </div>
        </header>
        <section className="banner">
          <div className="custom-container">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="basis-1/2 mb-[200px]">
                <img src="./images/banner-left-image.png" alt="" />
              </div>
              <div className="basis-1/2">
                <h3 className="text-3xl text-white md:text-black">
                  Speed dating Barcelona
                </h3>
                <p className="mt-7 text-white md:text-black">
                  Un speed dating es un evento para conocer gente en Barcelona
                  de forma rápida, y organizado por grupos de edad similar. Te
                  proponemos un modo práctico, organizado para solteros en
                  Barcelona que quieren conocer gente. Prueba una cita exprés
                  para encontrar pareja en Barcelona, podrás intercambiar
                  sensaciones, y comprobar con quién podrías congeniar
                </p>
                <div className="flex flex-row mt-7 items-center">
                  <div className="basis-full lg:basis-8/12">
                    <a
                      href="#"
                      className="base-button ml-0 block bg-white custom-base-shadow"
                    >
                      EVENTOS SPEED <span className="font-bold">DATING</span>
                    </a>
                    <a
                      href="#"
                      className="base-button ml-0 block bg-white mt-3 custom-base-shadow"
                    >
                      EVENTOS SPEED <span className="font-bold">FRIENDING</span>
                    </a>
                  </div>
                  <div className="basis-full lg:basis-4/12 hidden lg:flex">
                    <img
                      className="ml-5 "
                      src="./images/Group 376.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gradient-to-b from-[#D7C6B3] to-transparent">
        <section class="py-20">
          <div className="custom-container">
            <div className="flex flex-col md:flex-row md:space-x-10 justify-between items-stretch">
              <div className="border-2 border-[#C39A61] rounded-xl basis-6/12 bg-white overflow-hidden custom-dark-shadow -mt-[300px]">
                <img
                  src="images/card-banner-1.png"
                  class="aspect-video"
                  alt=""
                />
                <div className="p-5">
                  <h3 className="text-[#C39A61] text-3xl my-5 text-center">
                    Eventos de citas
                    <br /> Speed Dating
                  </h3>
                  <p className="text-base">
                    Mini citas rápidas de 7 minutos. Prueba las citas rápidas y
                    diviértete buscando pareja, o simplemente comparte nuevas
                    experiencias. <br />
                    <br /> Te proponemos un modo práctico y organizado para
                    conocer gente nueva en Barcelona.
                    <br />
                    <br /> Prueba una cita exprés, podrás intercambiar
                    sensaciones y comprobar con quién podrías congeniar.
                  </p>

                  <a href="#" className="base-button mt-5">
                    ¿Qué es un speed dating?
                  </a>
                  <a href="#" className="base-button mt-3">
                    eventos speed dating
                  </a>
                </div>
              </div>
              <div className="border-2 border-[#C39A61] bg-white rounded-xl basis-6/12 drop-shadow-md overflow-hidden custom-dark-shadow mt-5 md:-mt-[300px] md:w-4/5 mx-auto">
                <img
                  src="images/card-banner-2.png"
                  class="aspect-video"
                  alt=""
                />
                <div className="p-5">
                  <h3 className="text-[#C39A61] text-3xl my-5 text-center">
                    Speed Friending
                    <br /> Barcelona
                  </h3>
                  <p className="text-base">
                    Te ayudamos a encontrar nuevas amistades con las que
                    relacionarte, en este caso podrás tener citas con chicos y
                    chicas, siempre para amistad heterosexual.
                    <br />
                    <br />
                    Te proponemos un sistema de citas rápidas con el objetivo
                    tan solo de ampliar tu círculo de amistades, pueden ser esta
                    vez chicos y chicas.
                    <br />
                    <br />
                    Encuentra nuevas amistades con afinidad y déjate guiar por
                    nuestro evento organizado.
                  </p>
                  <a href="#" className="base-button mt-5">
                    eventos speed friending
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="custom-container bg-[#EDE9E7] border-t-2 border-[#C39A61]">
            <div className="flex flex-row justify-center items-scratch">
              <div className="basis-8/12">
                <div className="overlay h-full bg-dark/100">
                  <img
                    src="./images/Captura.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="basis-4/12 px-5 lg:px-10 py-5 relative">
                <img
                  src="./images/location.png"
                  className="block mx-auto"
                  alt=""
                />
                <h3 className="text-1xl text-[#C39A61] text-2xl">
                  ¿Dónde se organiza el evento?
                </h3>
                <ul className="mt-10">
                  <li className="flex flex-row justify-start items-start">
                    <img src="./images/star.png" className="mr-3" alt="" />
                    <div>
                      <strong>Hotel Indigo</strong>
                      <p>Gran vía 629, Barcelona</p>
                    </div>
                  </li>
                  <li className="mt-5 flex flex-row justify-start items-start">
                    <img src="./images/star.png" className="mr-3" alt="" />
                    <p>
                      Si ves que tu rango de edad ya está completo, puedes
                      inscribirte igualmente y te avisaremos si hay bajas.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="flex flex-row justify-center items-start text-center space-x-10 my-20">
        <img src="./images/star.png" alt="" />
        <div>
          <h3 className="text-3xl">Speed Dating Barcelona</h3>
          <p className="text-2xl text-[#C39A61]">Citas Rápidas</p>
        </div>
        <img src="./images/star.png" alt="" />
      </section>

      <section className="bg-[#EDE9E7] my-[150px]">
        <div className="custom-container py-10">
          <div className="flex flex-row justify-between items-center">
            <ul className="basis-4/12">
              <li className="flex flex-row justify-start items-center">
                <div className="w-10">
                  <img src="./images/clock.png" className="mr-3" alt="" />
                </div>
                <div>
                  <h3 className="text-2xl">
                    <strong>Viernes</strong> 28 de OCTUBRE
                  </h3>
                  <strong className>20:30h</strong>
                </div>
              </li>
              <li className="flex flex-row justify-start items-center mt-4">
                <div className="w-10">
                  <img
                    src="./images/location-alt.png"
                    className="mr-3"
                    alt=""
                  />
                </div>
                <div>
                  <strong>Hotel Indigo</strong>
                  <p>Gran vía 629, Barcelona</p>
                </div>
              </li>
            </ul>

            <div className="basis-8/12">
              <div className="flex flex-row justify-between items-center space-x-7">
                <div className="bg-white rounded-3xl border-2 border-[#C39A61] drop-shadow-xl w-full -my-[50%]">
                  <div className="text-center border-b px-5 py-10 border-[#C39A61]">
                    <p>Evento de citas rápidas</p>
                    <h3 className="text-3xl my-2 text-[#C39A61]">24-33</h3>
                    <span className="text-sm">AÑOS</span>
                  </div>
                  <ul className="p-5">
                    <li className="flex flex-row justify-start items-start">
                      <img src="./images/venus.png" className="mr-3" alt="" />
                      <div>
                        <strong>Hombre</strong>
                        <p className="text-red-500 py-1">COMPLETO</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                    <li className="flex flex-row justify-start items-start mt-5">
                      <img src="./images/mars.png" className="mr-3" alt="" />
                      <div>
                        <strong>Mujer</strong>
                        <p className="text-green-500 py-1">PLAZAS LIBRES</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-3xl border-2 border-[#C39A61] drop-shadow-xl w-full -my-[50%]">
                  <div className="text-center border-b px-5 py-10 border-[#C39A61]">
                    <p>Evento de citas rápidas</p>
                    <h3 className="text-3xl my-2 text-[#C39A61]">34-43</h3>
                    <span className="text-sm">AÑOS</span>
                  </div>
                  <ul className="p-5">
                    <li className="flex flex-row justify-start items-start">
                      <img src="./images/venus.png" className="mr-3" alt="" />
                      <div>
                        <strong>Hombre</strong>
                        <p className="text-red-500 py-1">COMPLETO</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                    <li className="flex flex-row justify-start items-start mt-5">
                      <img src="./images/mars.png" className="mr-3" alt="" />
                      <div>
                        <strong>Mujer</strong>
                        <p className="text-green-500 py-1">PLAZAS LIBRES</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-3xl border-2 border-[#C39A61] drop-shadow-xl w-full -my-[50%]">
                  <div className="text-center border-b px-5 py-10 border-[#C39A61]">
                    <p>Evento de citas rápidas</p>
                    <h3 className="text-3xl my-2 text-[#C39A61]">44-53</h3>
                    <span className="text-sm">AÑOS</span>
                  </div>
                  <ul className="p-5">
                    <li className="flex flex-row justify-start items-start">
                      <img src="./images/venus.png" className="mr-3" alt="" />
                      <div>
                        <strong>Hombre</strong>
                        <p className="text-red-500 py-1">COMPLETO</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                    <li className="flex flex-row justify-start items-start mt-5">
                      <img src="./images/mars.png" className="mr-3" alt="" />
                      <div>
                        <strong>Mujer</strong>
                        <p className="text-green-500 py-1">PLAZAS LIBRES</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EDE9E7] my-[250px]">
        <div className="custom-container py-10">
          <div className="flex flex-row justify-between items-center">
            <div className="basis-8/12">
              <div className="flex flex-row justify-between items-center space-x-7">
                <div className="bg-white rounded-3xl border-2 border-[#C39A61] drop-shadow-xl w-full -my-[50%]">
                  <div className="text-center border-b px-5 py-10 border-[#C39A61]">
                    <p>Evento de citas rápidas</p>
                    <h3 className="text-3xl my-2 text-[#C39A61]">24-33</h3>
                    <span className="text-sm">AÑOS</span>
                  </div>
                  <ul className="p-5">
                    <li className="flex flex-row justify-start items-start">
                      <img src="./images/venus.png" className="mr-3" alt="" />
                      <div>
                        <strong>Hombre</strong>
                        <p className="text-red-500 py-1">COMPLETO</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                    <li className="flex flex-row justify-start items-start mt-5">
                      <img src="./images/mars.png" className="mr-3" alt="" />
                      <div>
                        <strong>Mujer</strong>
                        <p className="text-green-500 py-1">PLAZAS LIBRES</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-3xl border-2 border-[#C39A61] drop-shadow-xl w-full -my-[50%]">
                  <div className="text-center border-b px-5 py-10 border-[#C39A61]">
                    <p>Evento de citas rápidas</p>
                    <h3 className="text-3xl my-2 text-[#C39A61]">34-43</h3>
                    <span className="text-sm">AÑOS</span>
                  </div>
                  <ul className="p-5">
                    <li className="flex flex-row justify-start items-start">
                      <img src="./images/venus.png" className="mr-3" alt="" />
                      <div>
                        <strong>Hombre</strong>
                        <p className="text-red-500 py-1">COMPLETO</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                    <li className="flex flex-row justify-start items-start mt-5">
                      <img src="./images/mars.png" className="mr-3" alt="" />
                      <div>
                        <strong>Mujer</strong>
                        <p className="text-green-500 py-1">PLAZAS LIBRES</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-3xl border-2 border-[#C39A61] drop-shadow-xl w-full -my-[50%]">
                  <div className="text-center border-b px-5 py-10 border-[#C39A61]">
                    <p>Evento de citas rápidas</p>
                    <h3 className="text-3xl my-2 text-[#C39A61]">44-53</h3>
                    <span className="text-sm">AÑOS</span>
                  </div>
                  <ul className="p-5">
                    <li className="flex flex-row justify-start items-start">
                      <img src="./images/venus.png" className="mr-3" alt="" />
                      <div>
                        <strong>Hombre</strong>
                        <p className="text-red-500 py-1">COMPLETO</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                    <li className="flex flex-row justify-start items-start mt-5">
                      <img src="./images/mars.png" className="mr-3" alt="" />
                      <div>
                        <strong>Mujer</strong>
                        <p className="text-green-500 py-1">PLAZAS LIBRES</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul className="basis-4/12 ml-10">
              <li className="flex flex-row justify-start items-center">
                <div className="w-10">
                  <img src="./images/clock.png" className="mr-3" alt="" />
                </div>
                <div>
                  <h3 className="text-2xl">
                    <strong>Viernes</strong> 28 de OCTUBRE
                  </h3>
                  <strong className>20:30h</strong>
                </div>
              </li>
              <li className="flex flex-row justify-start items-center mt-4">
                <div className="w-10">
                  <img
                    src="./images/location-alt.png"
                    className="mr-3"
                    alt=""
                  />
                </div>
                <div>
                  <strong>Hotel Indigo</strong>
                  <p>Gran vía 629, Barcelona</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#EDE9E7] my-[150px]">
        <div className="custom-container py-10">
          <div className="flex flex-row justify-between items-center">
            <ul className="basis-4/12">
              <li className="flex flex-row justify-start items-center">
                <div className="w-10">
                  <img src="./images/clock.png" className="mr-3" alt="" />
                </div>
                <div>
                  <h3 className="text-2xl">
                    <strong>Viernes</strong> 28 de OCTUBRE
                  </h3>
                  <strong className>20:30h</strong>
                </div>
              </li>
              <li className="flex flex-row justify-start items-center mt-4">
                <div className="w-10">
                  <img
                    src="./images/location-alt.png"
                    className="mr-3"
                    alt=""
                  />
                </div>
                <div>
                  <strong>Hotel Indigo</strong>
                  <p>Gran vía 629, Barcelona</p>
                </div>
              </li>
            </ul>

            <div className="basis-8/12">
              <div className="flex flex-row justify-between items-center space-x-7">
                <div className="bg-white rounded-3xl border-2 border-[#C39A61] drop-shadow-xl w-full -my-[50%]">
                  <div className="text-center border-b px-5 py-10 border-[#C39A61]">
                    <p>Evento de citas rápidas</p>
                    <h3 className="text-3xl my-2 text-[#C39A61]">24-33</h3>
                    <span className="text-sm">AÑOS</span>
                  </div>
                  <ul className="p-5">
                    <li className="flex flex-row justify-start items-start">
                      <img src="./images/venus.png" className="mr-3" alt="" />
                      <div>
                        <strong>Hombre</strong>
                        <p className="text-red-500 py-1">COMPLETO</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                    <li className="flex flex-row justify-start items-start mt-5">
                      <img src="./images/mars.png" className="mr-3" alt="" />
                      <div>
                        <strong>Mujer</strong>
                        <p className="text-green-500 py-1">PLAZAS LIBRES</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-3xl border-2 border-[#C39A61] drop-shadow-xl w-full -my-[50%]">
                  <div className="text-center border-b px-5 py-10 border-[#C39A61]">
                    <p>Evento de citas rápidas</p>
                    <h3 className="text-3xl my-2 text-[#C39A61]">34-43</h3>
                    <span className="text-sm">AÑOS</span>
                  </div>
                  <ul className="p-5">
                    <li className="flex flex-row justify-start items-start">
                      <img src="./images/venus.png" className="mr-3" alt="" />
                      <div>
                        <strong>Hombre</strong>
                        <p className="text-red-500 py-1">COMPLETO</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                    <li className="flex flex-row justify-start items-start mt-5">
                      <img src="./images/mars.png" className="mr-3" alt="" />
                      <div>
                        <strong>Mujer</strong>
                        <p className="text-green-500 py-1">PLAZAS LIBRES</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-3xl border-2 border-[#C39A61] drop-shadow-xl w-full -my-[50%]">
                  <div className="text-center border-b px-5 py-10 border-[#C39A61]">
                    <p>Evento de citas rápidas</p>
                    <h3 className="text-3xl my-2 text-[#C39A61]">44-53</h3>
                    <span className="text-sm">AÑOS</span>
                  </div>
                  <ul className="p-5">
                    <li className="flex flex-row justify-start items-start">
                      <img src="./images/venus.png" className="mr-3" alt="" />
                      <div>
                        <strong>Hombre</strong>
                        <p className="text-red-500 py-1">COMPLETO</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                    <li className="flex flex-row justify-start items-start mt-5">
                      <img src="./images/mars.png" className="mr-3" alt="" />
                      <div>
                        <strong>Mujer</strong>
                        <p className="text-green-500 py-1">PLAZAS LIBRES</p>
                        <a href="#" class="base-button py-1 px-7">
                          regístrate
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-[#D7C6B3] to-transparent">
        <section className="flex flex-row justify-center items-start text-center space-x-10 py-20">
          <img src="./images/star-base.png" alt="" />
          <div>
            <h3 className="text-3xl">Speed Friending Barcelona</h3>
            <p className="text-2xl">Nuevas Amistades</p>
          </div>
          <img src="./images/star-base.png" alt="" />
        </section>

        <section className="custom-container flex flex-row justify-between items-center">
          <ul className="basis-4/12">
            <li className="flex flex-row justify-start items-center">
              <div className="w-10">
                <img src="./images/clock.png" className="mr-3" alt="" />
              </div>
              <div>
                <h3 className="text-2xl">
                  <strong>Viernes</strong> 28 de OCTUBRE
                </h3>
                <strong className>20:30h</strong>
              </div>
            </li>
            <li className="flex flex-row justify-start items-center mt-4">
              <div className="w-10">
                <img src="./images/location-alt.png" className="mr-3" alt="" />
              </div>
              <div>
                <strong>Hotel Indigo</strong>
                <p>Gran vía 629, Barcelona</p>
              </div>
            </li>
          </ul>
          <div className="basis-8/12">
            <div className="bg-white rounded-3xl border-2 border-[#C39A61] overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src="./images/card-banner-4.png" alt="" />
              </div>
              <div className="flex flex-row justify-between items-center p-5">
                <div className="flex flex-row justify-around items-center basis-1/2">
                  <div>
                    <strong>Chicos y chicas</strong>
                    <p className="text-green-500">PLAZAS LIBRES</p>
                  </div>
                  <div className="flex flex-row justify-between items-center space-x-7">
                    <img src="./images/mars.png" alt="" />
                    <img src="./images/venus.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-row justify-around items-center basis-1/2">
                  <a href="#" class="base-button py-1 px-7 m-0">
                    regístrate
                  </a>
                  <div>
                    <strong>Conocer chicos y chicas</strong>
                    <p>Por grupos de edad similar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="custom-container flex flex-row justify-between items-center mt-10 mb-[100px]">
          <div className="basis-8/12">
            <div className="bg-white rounded-3xl border-2 border-[#C39A61] overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src="./images/card-banner-3.png" alt="" />
              </div>
              <div className="flex flex-row justify-between items-center p-5">
                <div className="flex flex-row justify-around items-center basis-1/2">
                  <div>
                    <strong>Chicos y chicas</strong>
                    <p className="text-green-500">PLAZAS LIBRES</p>
                  </div>
                  <div className="flex flex-row justify-between items-center space-x-7">
                    <img src="./images/mars.png" alt="" />
                    <img src="./images/venus.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-row justify-around items-center basis-1/2">
                  <a href="#" class="base-button py-1 px-7 m-0">
                    regístrate
                  </a>
                  <div>
                    <strong>Conocer chicos y chicas</strong>
                    <p>Por grupos de edad similar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="basis-4/12 ml-10">
            <li className="flex flex-row justify-start items-center">
              <div className="w-10">
                <img src="./images/clock.png" className="mr-3" alt="" />
              </div>
              <div>
                <h3 className="text-2xl">
                  <strong>Viernes</strong> 28 de OCTUBRE
                </h3>
                <strong className>20:30h</strong>
              </div>
            </li>
            <li className="flex flex-row justify-start items-center mt-4">
              <div className="w-10">
                <img src="./images/location-alt.png" className="mr-3" alt="" />
              </div>
              <div>
                <strong>Hotel Indigo</strong>
                <p>Gran vía 629, Barcelona</p>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <section className="flex flex-row justify-start items-scratch">
        <div className="basis-8/12 bg-[#EAE4DE] p-[150px]">
          <h3 className="text-3xl mb-10">Encuentra - Diviértete - Conecta</h3>
          <ul>
            <li className="flex flex-row justify-start items-start">
              <img src="./images/star-base.png" className="mr-3" alt="" />
              <div>
                <h4 className="text-xl mb-3">¿QUÉ ES UN SPEED DATING?</h4>
                <p>
                  Un speed dating es la forma más rápida y divertida de conocer
                  gente nueva como tú. <br />
                  <br />
                  BeDazzling organiza citas rápidas de 7 minutos, son
                  actividades filtradas por grupos de edad similar. Podrás
                  intercambiar sensaciones para conocer gente nueva, buscar
                  pareja, hacer nuevas amistades, o simplemente compartir nuevas
                  experiencias. Anímate a encontrar y conectar con personas como
                  tú.
                  <br />
                  <br />
                  Un speed dating es el mejor plan para conocer gente nueva, y
                  la diversión está asegurada;) ¡Garantizado!
                </p>
              </div>
            </li>
            <li className="flex flex-row justify-start items-start mt-5">
              <img src="./images/star-base.png" className="mr-3" alt="" />
              <div>
                <h4 className="text-xl mb-3">¿QUÉ ES UN SPEED FRIENDING?</h4>
                <p>
                  Un speed friending es la forma más rápida y divertida de
                  conocer gente nueva con el objetivo de ampliar tu círculo de
                  amistades. <br />
                  <br />
                  BeDazzling organiza eencuentros rápidos, heterosexuales, son
                  actividades filtradas por grupos de edad similar. Podrás
                  intercambiar sensaciones para hacer nuevas amistades, parejas
                  mixtas o del mismo género. Anímate a encontrar y conectar con
                  personas como tú.
                  <br />
                  <br />
                  Un speed friending es el mejor plan para conocer gente nueva
                  para salir, la diversión está asegurada;) ¡Garantizado!
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="basis-4/12 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('./images/column-image-1.png')" }}
        ></div>
      </section>
      <section className="flex flex-row justify-start items-scratch">
        <div
          className="basis-4/12 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('./images/column-image-2.png')" }}
        ></div>
        <div className="basis-8/12 bg-white p-[150px]">
          <h3 className="text-4xl mb-10">
            Encontrar pareja no siempre resulta fácil.
          </h3>
          <ul>
            <li className="flex flex-row justify-start items-start">
              <img src="./images/star.png" className="mr-3" alt="" />
              <div>
                <h4 className="text-xl text-[#C39A61] mb-3">
                  ¿Cómo puedo hacer la votación?
                </h4>
                <p>
                  Selecciona online a las personas que quieres conocer mejor. Al
                  día siguiente, cuando votas mediante nuestra web, puedes
                  filtrar personalmente a las personas con las que has estado
                  más a gusto. Si ha habido coincidencia, en este caso te
                  pasamos el teléfono para que contactes. En ningún otro caso
                  cedemos tus datos personales.
                </p>
              </div>
            </li>
            <li className="flex flex-row justify-start items-start mt-5">
              <img src="./images/star.png" className="mr-3" alt="" />
              <div>
                <h4 className="text-xl text-[#C39A61] mb-3">
                  ¿Cómo se organizan las citas?
                </h4>
                <p>
                  Al llegar te entregamos una identificación y una ficha, para
                  que puedas apuntar toda la información que creas importante de
                  las personas que conozcas. Concretamente, las chicas se
                  sientan en diferentes mesas, los chicos se añaden después, y
                  las parejas tienen unos minutos para presentarse, y empezar a
                  conocerse. Cuando los organizadores hacen una señal, los
                  chicos tienen que cambiar de mesa y sentarse con la siguiente
                  chica.
                </p>
              </div>
            </li>
            <li className="flex flex-row justify-start items-start mt-5">
              <img src="./images/star.png" className="mr-3" alt="" />
              <div>
                <h4 className="text-xl text-[#C39A61] mb-3">
                  ¿12 conversaciones iguales?
                </h4>
                <p>
                  7 minutos es suficiente para hacer unas pocas preguntas para
                  detectar afinidad, pero no pierdas mucho el tiempo, no es una
                  entrevista de trabajo... una sonrisa y un chiste valen más que
                  mil palabras... Encontrarás personalidades muy diferentes, y
                  tus conversaciones nunca serán iguales, deja fluir tus
                  sensaciones. Si hay match, en la primera cita ya harás todas
                  las preguntas que sean necesarias.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-row justify-start items-scratch">
        <div className="basis-8/12 bg-white p-[150px]">
          <ul>
            <li className="flex flex-row justify-start items-start">
              <img src="./images/star.png" className="mr-3" alt="" />
              <div>
                <h4 className="text-xl text-[#C39A61] mb-3">
                  ¿Qué duración tienen las citas?
                </h4>
                <p>
                  5 minutos es el tiempo mínimo que dispondrás, a veces son 7
                  minutos, a veces 9, el tiempo varía en función del número de
                  citas en tu grupo de edad. La duración total del evento
                  siempre es de 1:30h aproximadamente, y se divide entre el
                  número de participantes.
                </p>
              </div>
            </li>
            <li className="flex flex-row justify-start items-start mt-5">
              <img src="./images/star.png" className="mr-3" alt="" />
              <div>
                <h4 className="text-xl text-[#C39A61] mb-3">
                  ¿Seré fotografiado o filmado?
                </h4>
                <p>
                  Nunca serás fotografiado o filmado sin tu consentimiento.
                  Cualquier filmación o fotografía se realiza de forma privada,
                  nunca publicamos fotos de los participantes de nuestros
                  eventos.
                </p>
              </div>
            </li>
            <li className="flex flex-row justify-start items-start mt-5">
              <img src="./images/star.png" className="mr-3" alt="" />
              <div>
                <h4 className="text-xl text-[#C39A61] mb-3">
                  ¿Y si no me ha gustado nadie?
                </h4>
                <p>
                  Si no eliges votar a nadie, tendrás una segunda oportunidad,
                  podrás asistir de nuevo gratuitamente al nuevo evento que
                  elijas, si hay plazas disponibles. Debes hacer la reserva la
                  misma tarde del evento, si quedan plazas disponibles te
                  asignaremos una gratuita. No se puede reservar plaza en este
                  caso con antelación, tienen una caducidad de 2 meses. Siempre
                  tienes que avisar a la organización si te corresponde una
                  gratuidad, no incluye consumición.
                </p>
              </div>
            </li>
            <li className="flex flex-row justify-start items-start mt-5">
              <img src="./images/star.png" className="mr-3" alt="" />
              <div>
                <h4 className="text-xl text-[#C39A61] mb-3">
                  ¿Por qué elegirnos?
                </h4>
                <p>
                  Este es un mundo muy complicado, es un mundo muy ruidoso, y
                  vamos a tener muy pocas oportunidades de hacer que la gente
                  nos recuerde. Vamos a destacar algunos del los emails que
                  recibimos.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="basis-4/12 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('./images/column-image-3.png')" }}
        ></div>
      </section>
      <section>
        <div className="bg-[#EAE4DE] pt-[50px]">
          <h3 className="text-3xl custom-container text-center lg:text-left">
            Experiencias inolvidables
          </h3>
          <div className="relative aspect-video">
            <div className="triangle-1 bg-white p-5 rounded-md custom-dark-shadow translate-x-0 translate-y-0 mx-5 top-1/2 left-[20px] mt-5 lg:mt-0 lg:mx-0 lg:-translate-y-[60%] lg:translate-x-0 lg:w-[30%] lg:absolute">
              <h4 className="text-xl">CRISTINA</h4>
              <p className="mt-3">
                "Hola, fui al evento de speed dating el 26 de febrero de 2022
                vestida de mosca (carnavales) con dos abejitas del curro. Esa
                noche, conocí a Mark que quedó deslumbrado por mis alitas
                plateadas y mi gracia andaluza. Tras intercambiar los teléfonos,
                empezamos a hablar y a quedar ... Me gustaría daros las gracias,
                si no fuese ido a ese evento no hubiese conocido a ese chico
                medio ruso-armenio-catalán que me ha cautivado ;)"
              </p>
            </div>
            <div className="triangle-2 bg-white p-5 rounded-md custom-dark-shadow translate-x-0 translate-y-0 my-5 mx-5 top-0 left-1/2 lg:mx-0 lg:my-0 lg:-translate-x-1/2 lg:translate-y-0 lg:w-[30%] lg:absolute">
              <h4 className="text-xl">SARA</h4>
              <p className="mt-3">
                Buenos días Jordi, por favor dame de baja de las notificaciones.
                No sé si la gente te suele dar feedback de cómo les va después
                del speed dating pero te alegrará saber que la segunda vez que
                acudí, el 14 de junio de 2019, conocí a una persona maravillosa,
                coincidimos en la votación, empezamos a salir y nos hemos ido a
                vivir juntos. No lo imaginaba, pero veo que esta actividad
                funciona. Muchas gracias y a seguir ayudando a la gente a
                encontrar el amor 🙂💕."
              </p>
            </div>
            <div className="triangle-3 bg-white p-5 rounded-md custom-dark-shadow translate-x-0 translate-y-0 right-[20px] mx-5 lg:mx-0 lg:top-1/2 lg:w-[30%] lg:-translate-y-1/2 lg:translate-x-0 lg:absolute">
              <h4 className="text-xl">DANI</h4>
              <p className="mt-3">
                "Hola buenas tardes, el 28 de febrero de 2015 participé en
                vuestro speed dating donde conocí a Maria. Desde entonces
                estamos juntos y el próximo 22 de Junio de 2019 nos vamos a
                casar. Simplemente quería decíroslo y daros las gracias. Nunca
                20 euros estuvieron mejor invertidos. Un saludo."
              </p>
            </div>
            <div className="pb-[20vw] lg:pb-0"></div>
          </div>
        </div>
        <div className="bg-[#CAB496] relative pt-[10vw] pb-[100px]">
          <div className="w-[25vw] absolute bottom-0 rounded-t-[100rem] left-1/2 -translate-x-1/2 translate-y-0 overflow-hidden">
            <img
              src="./images/couple-image.png"
              className="w-full h-auto block"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="custom-container">
          <a
            href="#"
            className="bg-[#C39A61] text-white custom-dark-shadow px-10 py-1 rounded-full table mx-auto border border-[#C39A61] transition delay-75 hover:bg-white hover:text-[#C39A61]"
          >
            ¿Tienes un local con espacio para organizar nuestros eventos?
            Contacta
          </a>
          <div className="flex flex-row justify-between items-center mt-7">
            <div className="basis-6/12">
              <div className="aspect-square">
                <img
                  src="./images/bottom-banner-image.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div className="basis-6/12">
              <h3 className="text-4xl">Encuentra pareja en Dazzling</h3>
              <div className="flex flex-row justify-start items-center my-7">
                <img src="./images/star.png" className="mr-2" alt="" />
                <p>
                  Si buscas pareja estable te acompañamos en tu proceso.
                  Conectamos personas compatibles para formar una relación.
                </p>
              </div>
              <a href="#" class="base-button ml-0">
                más infOrmación
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EAE4DE] mt-[50px]">
        <div className="custom-container">
          <div className="flex flex-row justify-between items-scratch space-x-3">
            <div className="bg-white p-10 rounded-3xl custom-base-shadow border-2 border-[#C39A61] -mt-[150px]">
              <img
                src="./images/magnifier-zoom-search-outline.png"
                className="block m-auto"
                alt=""
              />
              <h3 className="text-[#C39A61] text-2xl mb-4 text-center">
                Encontrar pareja Barcelona
              </h3>
              <p>
                Un speed dating es un evento perfecto para encontrar pareja en
                Barcelona , es un método ideal para filtrar tus sensaciones con
                esa persona, y decidir si te gustaría tener una primera cita
                relajada, de forma rápida y divertida en Barcelona.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl custom-base-shadow border-2 border-[#C39A61] -mt-[150px]">
              <img
                src="./images/love-heart-outline.png"
                className="block m-auto"
                alt=""
              />
              <h3 className="text-[#C39A61] text-2xl mb-4 text-center">
                Comparte la experiencia Speed Datinga
              </h3>
              <p>
                En un speed dating se conoce mucha gente en poco tiempo, hasta
                12 citas, 1 cada 7 minutos, es la mejor opción para conocer
                gente en Barcelona en persona, o bien también online, a través
                de eventos de speed dating virtuales en Barcelona.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl custom-base-shadow border-2 border-[#C39A61] -mt-[150px]">
              <img
                src="./images/consultation-outline.png"
                className="block m-auto"
                alt=""
              />
              <h3 className="text-[#C39A61] text-2xl mb-4 text-center">
                Conocer gente Barcelona
              </h3>
              <p>
                Puedes ir solo a un speed dating en Barcelona, lo pasarás
                genial, o bien también puedes compartir la experiencia con tus
                amigos, puede ser incluso más divertido, es una experiencia que
                hay que vivirla, aunque sea solo 1 vez.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="basis-6/12 p-20">
              <div className="aspect-square">
                <img
                  src="./images/footer-banner-image.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div className="basis-6/12">
              <div className="flex flex-row justify-start items-start">
                <img src="./images/star.png" alt="" />
                <h3 className="text-3xl ml-3">
                  Próximos eventos Speed dating Barcelona
                </h3>
              </div>
              <a href="#" class="base-button ml-0 mt-10">
                más infOrmación
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="custom-container flex flex-row justify-between items-center">
          <div className="basis-6/12">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="basis-6/12">
            <ul className="flex flex-row justify-between items-center">
              <li>
                Calle Raset 22, Bajos
                <br />
                08021 Barcelona
              </li>
              <li>
                931261549
                <br />
                628938161
              </li>
              <li>
                © 2013-2022 Dazzling
                <br />
                Aviso legal / Política de privacidad
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
