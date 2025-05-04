import React from "react";
import ParticleBackground from "./components/particles";

function App() {
  return (
    <div>
      <section className="flex flex-col justify-between h-screen ">
        <header className="z-10 flex items-center justify-between w-full px-4 mt-5 max-w-screen-xl mx-auto pointer-events-none">
          <svg
            width="70"
            height="70"
            viewBox="0 0 91 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_1_3" fill="white">
              <path d="M0.363636 94L15.8182 0.909088H32.6818L25.6364 43.6818H26.7727L70.1364 0.909088H90.7273L47.8636 42.6818L75.5909 94H55.3182L34.3182 54.0909L21.8636 66.3636L17.2273 94H0.363636Z" />
            </mask>
            <path
              d="M0.363636 94L15.8182 0.909088H32.6818L25.6364 43.6818H26.7727L70.1364 0.909088H90.7273L47.8636 42.6818L75.5909 94H55.3182L34.3182 54.0909L21.8636 66.3636L17.2273 94H0.363636Z"
              fill="black"
            />
            <path
              d="M0.363636 94L-2.59586 93.5087L-3.17547 97H0.363636V94ZM15.8182 0.909088V-2.09091H13.2752L12.8587 0.417766L15.8182 0.909088ZM32.6818 0.909088L35.6419 1.39667L36.2164 -2.09091H32.6818V0.909088ZM25.6364 43.6818L22.6763 43.1942L22.1018 46.6818H25.6364V43.6818ZM26.7727 43.6818V46.6818H28.0033L28.8794 45.8176L26.7727 43.6818ZM70.1364 0.909088V-2.09091H68.9058L68.0296 -1.22673L70.1364 0.909088ZM90.7273 0.909088L92.8211 3.05757L98.104 -2.09091H90.7273V0.909088ZM47.8636 42.6818L45.7698 40.5333L44.1473 42.1146L45.2243 44.1079L47.8636 42.6818ZM75.5909 94V97H80.6217L78.2303 92.5739L75.5909 94ZM55.3182 94L52.6633 95.397L53.5068 97H55.3182V94ZM34.3182 54.0909L36.9731 52.6939L35.0911 49.1174L32.2125 51.954L34.3182 54.0909ZM21.8636 66.3636L19.758 64.2268L19.0658 64.9089L18.905 65.8673L21.8636 66.3636ZM17.2273 94V97H19.7659L20.1859 94.4964L17.2273 94ZM3.32313 94.4913L18.7777 1.40041L12.8587 0.417766L-2.59586 93.5087L3.32313 94.4913ZM15.8182 3.90909H32.6818V-2.09091H15.8182V3.90909ZM29.7217 0.421503L22.6763 43.1942L28.5965 44.1694L35.6419 1.39667L29.7217 0.421503ZM25.6364 46.6818H26.7727V40.6818H25.6364V46.6818ZM28.8794 45.8176L72.2431 3.04491L68.0296 -1.22673L24.666 41.546L28.8794 45.8176ZM70.1364 3.90909H90.7273V-2.09091H70.1364V3.90909ZM88.6335 -1.2394L45.7698 40.5333L49.9574 44.8303L92.8211 3.05757L88.6335 -1.2394ZM45.2243 44.1079L72.9515 95.4261L78.2303 92.5739L50.503 41.2558L45.2243 44.1079ZM75.5909 91H55.3182V97H75.5909V91ZM57.9731 92.603L36.9731 52.6939L31.6633 55.4879L52.6633 95.397L57.9731 92.603ZM32.2125 51.954L19.758 64.2268L23.9693 68.5005L36.4238 56.2278L32.2125 51.954ZM18.905 65.8673L14.2686 93.5036L20.1859 94.4964L24.8223 66.86L18.905 65.8673ZM17.2273 91H0.363636V97H17.2273V91Z"
              fill="white"
              mask="url(#path-1-inside-1_1_3)"
            />
          </svg>

          <div className="flex gap-4 pointer-events-auto">
            <a href="tel:9604196219">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>

            <a href="https://wa.me/9604196219" target="_blank">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="whatsapp"
                className="svg-inline--fa fa-whatsapp fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </a>
          </div>
        </header>

        <ParticleBackground
          id="particles"
          className="absolute inset-0 hidden md:block"
        />

        {/*  <div id="wrapper-canvas">
          <canvas></canvas>
        </div> */}

        <div className="flex -mt-8 relative">
          <div className="max-w-screen-xl mx-auto w-full px-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 878.63037 483"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="pointer-events-none absolute top-0 left-1/2 translate-y-[190px] w-[210px] xl:-translate-y-[90px] md:translate-y-[120px] sm:translate-y-[150px] -translate-x-1/2 xl:w-[600px] md:w-[400px] sm:w-[300px] "
            >
              <path
                d="M294.7164,621.20348c-19.51084,14.54436-25.04043,40.13465-25.04043,40.13465s26.10369,2.00928,45.61453-12.53511,25.04043-40.13465,25.04043-40.13465S314.22725,606.65916,294.7164,621.20348Z"
                transform="translate(-160.68481 -208.5)"
                fill="#f1f1f1"
              />
              <path
                d="M302.84375,628.03207c-9.37708,22.45621-32.86178,34.02822-32.86178,34.02822s-8.28141-24.83665,1.09568-47.29286,32.86172-34.02822,32.86172-34.02822S312.22084,605.57587,302.84375,628.03207Z"
                transform="translate(-160.68481 -208.5)"
                fill="#f1f1f1"
              />
              <path
                d="M864.18723,563.11405h0a194.65688,194.65688,0,0,1-1.63336-42.19544l1.63336-23.307h0c-9.00016,17.90831-6.96615,41.47881,0,65.50242Z"
                transform="translate(-160.68481 -208.5)"
                fill="#cacaca"
              />
              <path
                d="M871.20535,567.013h0a143.0906,143.0906,0,0,1-.78588-25.11633l.78588-13.87323h0C866.87509,538.68318,867.85373,552.71319,871.20535,567.013Z"
                transform="translate(-160.68481 -208.5)"
                fill="#cacaca"
              />
              <path
                d="M902.40062,584.17028v7.79791a2.3515,2.3515,0,0,1-2.33937,2.33937h-3.899a.777.777,0,0,0-.77979.77979v63.94288a2.35149,2.35149,0,0,1-2.33937,2.33937H845.47587a2.34116,2.34116,0,0,1-2.33938-2.33937V595.08735a.78216.78216,0,0,0-.77979-.77979H837.678a2.34117,2.34117,0,0,1-2.33937-2.33937v-7.79791a2.33615,2.33615,0,0,1,2.33937-2.33938h62.3833A2.3464,2.3464,0,0,1,902.40062,584.17028Z"
                transform="translate(-160.68481 -208.5)"
                fill="#f2f2f2"
              />
              <rect
                x="682.52174"
                y="387.4451"
                width="52.24601"
                height="2.33937"
                fill="#e6e6e6"
              />
              <path
                d="M895.3825,630.36884c-17.48271,7.23486-35.15611,7.31459-53.0258,0v-16.481a83.27378,83.27378,0,0,1,53.0258,0Z"
                transform="translate(-160.68481 -208.5)"
                fill="#e6e6e6"
              />
              <circle
                id="fff0188c-9915-4c0d-8339-9317a77083e8"
                data-name="Ellipse 276"
                cx="441.8526"
                cy="99.21067"
                r="70.6659"
                fill="#feb8b8"
              />
              <path
                id="ac220ed6-7c3f-4d1e-8d82-3295770c496a-554"
                data-name="Path 1461"
                d="M668.54008,246.746a81.61376,81.61376,0,0,0-46.43-35.49166l-8.6754,6.33079v-8.22035a75.12281,75.12281,0,0,0-14.03207-.81741l-7.48468,6.7722V209.11a80.83444,80.83444,0,0,0-55.76328,33.16889c-16.25407,23.43225-18.99783,56.03165-3.01076,79.65191,4.38811-13.48715,9.71486-26.14193,14.1043-39.62775a39.91571,39.91571,0,0,0,10.39873.05039l5.339-12.45857,1.49177,11.93136c16.54971-1.44138,41.0963-4.60742,56.785-7.50784l-1.52581-9.15355,9.12769,7.606c4.80635-1.10624,7.66041-2.11028,7.42476-2.87726,11.66844,18.81119,25.94847,30.82566,37.61558,49.63682C678.33663,293.0056,683.43725,270.95065,668.54008,246.746Z"
                transform="translate(-160.68481 -208.5)"
                fill="#2f2e41"
              />
              <path
                d="M754.51974,489.43043c-2.43-14.61929-4.93649-29.51921-11.73089-42.68893-4.46552-8.62629-11.55394-16.84664-21.1096-18.55231a20.4215,20.4215,0,0,1-5.49659-1.27245c-2.79985-1.34871-40.42516-22.82733-46.40535-26.56828-5.13471-3.21152-13.24023-9.158-17.32725-9.158-4.11163-.09038-19.87765,3.579-81.41374-1.23129,0,0-16.90485,6.66319-29.98543,14.74285-.19823-.13063-63.869,34.06031-66.261,33.97034-4.53005-.19075-8.74079,2.70971-11.33775,6.36219-2.5963,3.65239-3.81429,8.174-5.08948,12.54576,13.90677,30.97,26.6308,61.97961,40.5389,92.94963a7.93068,7.93068,0,0,1,1.00579,3.81454,9.30964,9.30964,0,0,1-1.7302,3.81453c-6.82034,10.95592-6.60348,24.736-5.85845,37.61284.74569,12.87686,1.66766,26.47839-4.087,38.02019-1.56523,3.16878-3.60075,6.06924-5.08948,9.238-3.48634,7.17681-4.74624,30.13086-2.71,37.84166l255.12065,7.30869C730.06748,673.1021,754.51974,489.43043,754.51974,489.43043Z"
                transform="translate(-160.68481 -208.5)"
                fill="#7de714"
              />
              <path
                id="bb46eb08-8e3e-4ac5-913b-26d221d967b9-555"
                data-name="Path 1421"
                d="M436.31023,551.90313a45.04293,45.04293,0,0,0-.15258,11.10851l3.65653,52.51275c.34331,4.94938.68117,9.88653,1.14573,14.82359.87734,9.58136,2.18792,19.08639,3.81455,28.57778a5.08966,5.08966,0,0,0,5.21639,4.94937c16.096,3.40585,32.72612,3.26965,49.15321,2.34185,25.067-1.39909,89.1978-4.0461,93.11589-9.13583s1.63483-13.32231-3.474-17.43793-89.73865-14.14932-89.73865-14.14932c.82693-6.55285,3.32139-12.72429,5.68777-18.946,4.25049-11.03491,8.22035-22.43228,8.29664-34.2533s-4.37719-24.24962-14.0607-31.02182c-7.9656-5.5597-18.22129-6.591-27.928-6.3621-7.06238.203-19.26485-1.48907-25.71553,1.27245C440.22288,538.431,437.26387,546.90479,436.31023,551.90313Z"
                transform="translate(-160.68481 -208.5)"
                fill="#fbbebe"
              />
              <path
                id="efe93a1e-ccdd-49fd-af5f-e26394aa0937-556"
                data-name="Path 1430"
                d="M457.62676,458.523a13.16962,13.16962,0,0,0-2.82413,4.51753A213.58786,213.58786,0,0,0,436.862,536.35613a7.32926,7.32926,0,0,1-.82693,3.55028,15.53466,15.53466,0,0,1-1.87049,2.023,7.02422,7.02422,0,0,0,.84,9.89817q.17346.1463.35609.28121c2.09937-3.95082,7.125-5.24231,11.59215-5.58556,21.38872-1.692,42.28155,8.25852,63.73432,7.50784-1.51355-5.23-3.69057-10.25571-4.92486-15.54841-5.4589-23.50169,8.15632-49.08916-.19073-71.72579-1.6675-4.52979-4.45348-8.98325-8.84294-10.96818a23.55527,23.55527,0,0,0-5.66189-1.49858c-5.42075-.97952-16.21183-5.166-21.45275-3.48622-1.93452.624-2.69742,2.44268-4.3009,3.54209C462.87722,455.90186,459.64576,456.474,457.62676,458.523Z"
                transform="translate(-160.68481 -208.5)"
                fill="#7de714"
              />
              <path
                id="a38c3c09-000b-42b7-8619-0229d8aff5e9-557"
                data-name="Path 1421"
                d="M754.67242,536.1831c-6.45068-2.76152-18.65315-1.06948-25.71553-1.27245-9.70666-.22892-19.96235.8024-27.928,6.3621-9.68351,6.7722-14.137,19.2008-14.0607,31.02182s4.04615,23.21839,8.29664,34.2533c2.36638,6.22174,4.86084,12.39318,5.68777,18.946,0,0-84.62988,10.0337-89.73865,14.14932s-7.39205,12.34819-3.474,17.43793,126.17305,10.19983,142.2691,6.794a5.08966,5.08966,0,0,0,5.21639-4.94937c1.62663-9.49139,2.93721-18.99642,3.81455-28.57778.46456-4.93706.80242-9.87421,1.14573-14.82359l3.65653-52.51275a45.04293,45.04293,0,0,0-.15258-11.10851C762.73613,546.90479,759.77712,538.431,754.67242,536.1831Z"
                transform="translate(-160.68481 -208.5)"
                fill="#fbbebe"
              />
              <path
                id="bd3879bf-5d05-49be-b690-c4d97e29a2ab-558"
                data-name="Path 1430"
                d="M734.68691,454.346c-1.60348-1.09941-2.36638-2.91813-4.3009-3.54209-5.24092-1.67976-16.032,2.5067-21.45275,3.48622a23.55527,23.55527,0,0,0-5.66189,1.49858c-4.38946,1.98493-7.17544,6.43839-8.84294,10.96818-8.34705,22.63663,5.26817,48.2241-.19073,71.72579-1.23429,5.2927-3.41131,10.3184-4.92486,15.54841,21.45277.75068,42.3456-9.19987,63.73432-7.50784,4.46712.34325,9.49278,1.63474,11.59215,5.58556q.18253-.13482.35609-.28121a7.02422,7.02422,0,0,0,.84005-9.89817,15.53466,15.53466,0,0,1-1.87049-2.023,7.32926,7.32926,0,0,1-.82693-3.55028,213.58786,213.58786,0,0,0-17.94066-73.31562,13.16962,13.16962,0,0,0-2.82413-4.51753C740.35424,456.474,737.12278,455.90186,734.68691,454.346Z"
                transform="translate(-160.68481 -208.5)"
                fill="#7de714"
              />
              <circle
                cx="420.92361"
                cy="438.81028"
                r="19.07275"
                fill="#fbbebe"
              />
              <circle
                cx="463.15612"
                cy="438.81028"
                r="19.07275"
                fill="#fbbebe"
              />
              <path
                d="M741.57233,690.28819H479.54154a11.55237,11.55237,0,0,1-11.53931-11.53864V519.78292a11.55237,11.55237,0,0,1,11.53931-11.53864H741.57233a11.55237,11.55237,0,0,1,11.5393,11.53864V678.74955A11.55237,11.55237,0,0,1,741.57233,690.28819Z"
                transform="translate(-160.68481 -208.5)"
                fill="#3f3d56"
              />
              <circle
                id="bf1cdf42-3b4f-4239-91c9-f6802a29e918"
                data-name="Ellipse 263"
                cx="449.2365"
                cy="390.76627"
                r="7.63455"
                fill="#fff"
              />
              <polygon
                points="878.63 449.724 0 449.724 0 476.724 51.97 476.724 51.97 483 826.68 483 826.68 476.724 878.63 476.724 878.63 449.724"
                fill="#f1f1f1"
              />
              <path
                d="M537.55552,334.04923h0c-11.3546,0-20.55934-9.95244-20.55934-22.22945h0V300.705c0-12.277,9.20473-22.22945,20.55933-22.22945h0v55.57369Z"
                transform="translate(-160.68481 -208.5)"
                fill="#7de714"
              />
              <path
                d="M668.77923,278.47558h0c11.35461,0,20.55935,9.95245,20.55935,22.22943v11.11477c0,12.277-9.20472,22.22945-20.55935,22.22945h0V278.47558Z"
                transform="translate(-160.68481 -208.5)"
                fill="#7de714"
              />
              <path
                d="M679.55259,302.45164h-3.262c0-44.73-33.65638-81.12069-75.026-81.12069-41.36939,0-75.02605,36.3907-75.02605,81.12069h-3.262c0-46.6749,35.11988-84.64766,78.288-84.64766C644.433,217.804,679.55259,255.77677,679.55259,302.45164Z"
                transform="translate(-160.68481 -208.5)"
                fill="#7de714"
              />
            </svg>

            <div className="relative ml-4 md:ml-12">
              <h1 className="text-4xl md:text-[64px] font-['poppins'] font-semibold italic relative mr-12">
                Kalpesh More
              </h1>
              <p className="font-['Inter'] italic my-4 md:my-8">
                Frontend Developer
              </p>
{/* hi */}
              <a href="./Kalpesh_Resume.pdf" download="Kalpesh_Resume.pdf" >
              <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#7de714] to-[#228B22] relative hover:scale-110 ease-in-out duration-100 group">
                Download Resume
                <svg
                  fill="#ffffff"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xml:space="preserve"
                  stroke="currentColor"
                  className="w-7 absolute top-1/2 -translate-y-1/2 -right-6 group-hover:-right-8 ease-in-out duration-100"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      id="XMLID_27_"
                      d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                    />{" "}
                  </g>
                </svg>
              </button>
              </a>
             
            </div>
          </div>

          <ul className="ml-auto mr-8 space-y-6 text-[#b0b2c3] relative">
            <li className="w-7 hover:text-white">
              <a
                href="https://www.linkedin.com/in/kalpesh-more-6b6266219/"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </a>
            </li>

            <li className="w-7 hover:text-white">
              <a href="https://x.com/KalpeshMore0011" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
            </li>

            <li className="w-7 hover:text-white">
              <a href="https://github.com/kalpeshmore1234" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
            </li>

            <li className="w-7 hover:text-white">
              <a
                href="https://www.youtube.com/@KalpeshMore-b5h"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
                </svg>
              </a>
            </li>

            <li className="w-7 hover:text-white">
              <a href="mailto:kalpeshmore4049803@gmail.com" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  />
                </svg>
              </a>
            </li>

            <li className="w-7 hover:text-white">
              <a
                href="https://www.instagram.com/kalpeshmore777/"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div
          className="relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444]
        after:left-1/2 after:-translate-x-1/2 after:top-[100px]"
        >
          <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#7de714] to-[#228B22] relative hover:scale-110 ease-in-out duration-100 group  mb-20 ">
            My Latest Works
            <svg
              fill="#ffffff"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xml:space="preserve"
              stroke="currentColor"
              className="w-7 rotate-90 absolute left-1/2 -translate-x-1/2 top-11 group-hover:top-14 ease-in-out duration-100"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="XMLID_27_"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />{" "}
              </g>
            </svg>
          </button>
        </div>
      </section>


     <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
       <h2
        className="text-3xl sm:text-[40px]  relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#7de714] sm:border-b-2 border-[#0FFF50]">
        Latest Works
      </h2>

      <div
        className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div
          className="h-[1px] left-1/4 right-1/2 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://snitchclone.netlify.app/"
          className="flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200"
          >
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1728311118/Group_1_avxayb.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Snitch.com Clone
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
            Snitch.com Clone
          </h3>
          <span className="text-[#459bd5] text-base md:text-lg"
            >(E-commerce website)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
          Create a clone of the e-commerce store Snitch, adding features like addToCart, removeFromCart, deleteCart, countItems, and totalCount for essential e-commerce operations, using React and Redux.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>

           
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
            Socialbeehives
          </h3>
          <span className="text-[#ffe578] text-base md:text-lg"
            >(Digital marketing Agency)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
            Being a lead developer, revamped the site to a highly responsive,
            and interactive website. 
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #html
            </li>
            
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #figma
            </li>

            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #gsap
            </li>
          </ul>
        </div>
        <div
          className="h-[1px] left-1/2 right-1/4 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://socialbeehives1234.netlify.app/"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
          >
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1728326500/SocialbeehivesL_mcvski.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Socialbeehives
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div
          className="h-[1px] left-1/4 right-1/2 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://nextflickszone.netlify.app/"
          className="flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200"
          >
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1746358345/netflix-clone_zwdjgu.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Netflix Clone
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
            Netflix Clone
          </h3>
          <span className="text-[#fc815c] text-base md:text-lg"
            >(Clone Of the OTT platform named Netflix)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
          Built a Netflix clone web app from scratch, replicating core features like user authentication, movie browsing, and responsive UI using modern web technologies.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>

            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react-router
            </li>
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
      
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #firebase
            </li>
          
          
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">
            Tathe Group
          </h3>
          <span className="text-[#47afa1] text-base md:text-lg"
            >(Real Estate Website)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
          As a lead developer, transformed the website into a fully responsive and engaging platform. Implemented new feature while collaborating closely with the UX designer.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #html
            </li>
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #figma
            </li>
          </ul>
        </div>
        <div
          className="h-[1px] left-1/2 right-1/4 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://tathe123.netlify.app/"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
          >
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1728326499/TatheL_aykyhg.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Tathe Group
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div
          className="h-[1px] left-1/4 right-1/2 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://clicodehubcompilerkalpesh.netlify.app/"
          className="flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200"
          >
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1728326499/CompilerL_jnymth.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >ClickCodeHub Compiler
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
          ClickCodeHub Compiler
          </h3>
          <span className="text-[#fc815c] text-base md:text-lg"
            >(Coding Compiler)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
          Developed a coding compiler for web developers, enabling users to create and preview static websites in real-time. Built with a focus on simplicity and user experience.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #html
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #figma
            </li>
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
            Food Menu
          </h3>
          <span className="text-[#ffe578] text-base md:text-lg"
            >(Landing Page)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
          Developed a Food Menu app to display and filter menu items dynamically by category, fetching data from the GitHub API.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>
            
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #figma
            </li>

          </ul>
        </div>
        <div
          className="h-[1px] left-1/2 right-1/4 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://foodmenu273.netlify.app/"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
          >
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1728368746/Food_Menu_ocvg8n.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Food Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>


      <div
        className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div
          className="h-[1px] left-1/4 right-1/2 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://habittracker190.netlify.app/"
          className="flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200"
          >
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1728369917/HabitTrackerL_cum4s8.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Habit Tracker
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
            Habit Tracker
          </h3>
          <span className="text-[#459bd5] text-base md:text-lg"
            >(Habit Tracker App)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
          Built a React-Redux Habit Tracker app for tracking daily habits with features to add and remove habits, displaying habit streaks.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #redux
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #material UI
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #typescript
            </li>
           
          </ul>
        </div>
      </div>

      
      <div
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">
            Book Store
          </h3>
          <span className="text-[#47afa1] text-base md:text-lg"
            >(Book Store App)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
          Created a full-stack MERN application for managing books, offering features to create, read, update, and delete books. Integrated MongoDB for data storage and React for the frontend.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #node.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #express.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #mongodb
            </li>
           
          </ul>
        </div>
        <div
          className="h-[1px] left-1/2 right-1/4 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://bookstoreapp3456.netlify.app/"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
          >
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1728379585/BookStoreL_yk3a9f.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Book Store
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>



      <div
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div
          className="h-[1px] left-1/4 right-1/2 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://mern-food-ordering-app-frontend-raez.onrender.com/"
          className="flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200"
          >
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1729344164/MERN_Food_App_twlcqw.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Food Ordering App
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
            Food Ordering App
          </h3>
          <span className="text-[#fc815c] text-base md:text-lg"
            >(Food Ordering App)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
          Developed a responsive full stack food ordering app using MERN. It has all the functionalities including authentication, addToCart, creating account as restaurant owner, creating an account as a customer, Order checking, Order status and also Payment completion using stripe.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #tailwind css
            </li>
      
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #node.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #express.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #mongodb
            </li>
          </ul>
        </div>
      </div>


      <div
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#CC00CC] font-bold text-2xl md:text-4xl">
            Unsplash Images
          </h3>
          <span className="text-[#CC00CC] text-base md:text-lg"
            >(Unsplash Images App)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
          Created a React app using React Query to fetch and display images from the Unsplash API, providing a seamless browsing experience for users to view high-quality images.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>
            
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react_query
            </li>
          
        
           
          </ul>
        </div>
        <div
          className="h-[1px] left-1/2 right-1/4 bg-[#0FFF50] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://unsplash-images123.netlify.app/"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
          >
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(125,231,20,0.6)]"
              src="https://res.cloudinary.com/db0oa8ou5/image/upload/v1735140115/Unsplash_Images_1_dqp5wv.png"
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#CC00CC] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Unsplash Images
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>



      
      

      
      <div
        className="w-[2px] hidden sm:block bg-[#0FFF50] absolute top-[52px] bottom-0 left-1/2 -translate-x-1/2"
      >

      </div>
     </section>


    


    </div>
  );
}

export default App;
