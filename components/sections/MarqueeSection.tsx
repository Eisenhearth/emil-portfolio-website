import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeSection = () => {
  return (
    <div>
      <div className='max-w-screen-xl mx-auto px-4 my-12 lg:my-40'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-Oswald text-3xl md:text-5xl font-bold uppercase mb-6'>I have collaborated with renowned brands</h1>
            <Marquee autoFill speed={100} pauseOnHover>
                <div>
                    <svg className="w-24 md:w-36 h-auto mx-6 cursor-pointer" viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z"/>
                        </g>
                    </svg>
                </div>
                <div>
                    <svg className="w-24 md:w-36 h-auto mx-6 cursor-pointer"  viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> 
                        <path d="M80.323 92.735l-21.51.766 20.424 1.135 1.086-1.901zM77.75 97.255l-21.561.767 20.5 1.139 1.061-1.906zM75.177 101.813l-21.534.756 20.475 1.138 1.059-1.894zM72.657 106.348l-21.561.768 20.451 1.136 1.11-1.904zM99.014 69.92l-27.454.977 27.532 1.53-.078-2.507zM98.84 65.434l-24.663.865 24.741 1.419-.078-2.284zM98.664 61.107l-21.974.723 22.08 1.226-.106-1.949zM98.516 56.665l-19.261.644 19.337 1.142-.076-1.786zM98.391 53.074H81.639l16.777.89-.025-.89zM70.059 110.881l-21.509.779h21.07l.439-.779z"/> 
                        <path d="M142.953 53.219h-30.998l-.879 1.556 15.512.823c.182 0 .182.258-.078.258l-16.338.546-1.576 2.758 15.406.91c.207.026.156.31-.025.31l-16.365.538-1.523 2.641 15.381.854c.336.026.336.311 0 .311l-16.338.573-1.551 2.762 15.33.879c.336.026.311.336 0 .336l-16.338.582-1.578 2.728 15.355.853c.232.026.26.311-.051.311l-47.077 1.577 44.673 2.482c.283 0 .258.362-.053.362L66.689 79.85l44.673 2.481c.207 0 .258.336-.053.336l-47.231 1.706 44.673 2.482c.182.026.361.362-.025.388L61.57 88.921l44.672 2.481c.129.026.258.362-.051.362l-23.733.846.078 2.142 21.147 1.175c.154.026.232.336-.053.336l-21.016.747.103 2.396 18.356 1.02c.18.026.258.388-.053.388l-18.2.639.079 2.629 15.641.869c.18.025.232.361-.078.361l-15.485.553.103 2.892 12.926.718c.182.026.182.337-.077.337l-12.797.463.052 1.243h41.726c11.064 0 20.99-8.066 22.852-14.478 1.863-6.411 1.863-12.202-7.031-15.097 4.965-1.138 13.598-6.737 15.305-14.478 1.548-7.033-1.036-14.22-13.083-14.246zm-20.988 44.9h-12.822l7.238-12.823h9.514c9.824 0 5.066 12.823-3.93 12.823zm16.596-27.509c-.414 1.551-3.518 5.481-7.445 5.481h-9.514l6.1-10.754h4.861c6.203.207 6.41 3.723 5.998 5.273zM189.922 130.099c0-4.969-4.131-9.131-9.1-9.131-5.098 0-9.26 4.228-9.26 9.422a9.253 9.253 0 0 0 9.293 9.292c3.773 0 7.355-2.581 8.42-6.098h-4.711c-.936 1.484-2.16 2.161-3.84 2.161-2.129 0-4.031-1.452-4.645-3.517h13.615c.163-.999.228-1.484.228-2.129zm-13.971-1.244c.613-2.42 2.549-3.969 4.936-3.969 2.389 0 4.26 1.517 4.84 3.969h-9.776zM128.756 121.829v1.449c-1.354-1.452-3.316-2.278-5.414-2.278-4.646 0-8.607 3.968-8.607 9.131 0 4.871 3.504 9.24 8.699 9.24 2.291 0 4.033-.529 5.678-2.4v2.291h3.938v-17.433h-4.294zm-4.809 13.847a5.41 5.41 0 1 1 0-10.821 5.41 5.41 0 0 1 0 10.821zM11.417 120.967c-1.774 0-3.129.613-4.614 2.13v-1.71H2.834v17.875h4.292v-8.422c0-2.29.193-5.937 3.355-5.937 2.968 0 3.291 3.42 3.291 5.614v8.744h4.291v-9.583c0-2.517-.193-3.71-.871-5.13-1-2.129-3.355-3.581-5.775-3.581zM38.081 130.099c0-4.969-4.13-9.131-9.099-9.131-5.098 0-9.26 4.228-9.26 9.422a9.254 9.254 0 0 0 9.292 9.292c3.775 0 7.356-2.581 8.421-6.098h-4.71c-.936 1.484-2.162 2.161-3.84 2.161-2.129 0-4.033-1.452-4.646-3.517h13.615c.163-.999.227-1.484.227-2.129zm-13.97-1.244c.613-2.42 2.549-3.969 4.937-3.969s4.259 1.517 4.84 3.969h-9.777zM108.686 139.247h4.291v-23.844h-4.291v23.844zM144.371 120.967c-1.775 0-3.131.613-4.615 2.13v-1.71h-3.969v17.875h4.293v-8.422c0-2.29.193-5.937 3.355-5.937 2.967 0 3.291 3.42 3.291 5.614v8.744h4.291v-9.583c0-2.517-.193-3.71-.871-5.13-1-2.129-3.355-3.581-5.775-3.581zM161.729 124.904c1.967 0 3.096.646 4.162 2.452h4.838c-1.322-3.839-4.709-6.389-8.84-6.389-5.227 0-9.422 4.162-9.422 9.293 0 5.162 4.227 9.421 9.422 9.421a9.579 9.579 0 0 0 7.033-3.13c.904-1 1.227-1.581 1.807-3.161h-4.838c-1.002 1.548-2.291 2.354-3.904 2.354-3.002 0-5.227-2.323-5.227-5.421 0-3.128 2.129-5.419 4.969-5.419zM54.483 132.293l-3.039-10.905h-3.453l-3.072 10.905-3.633-10.905H37.5l5.968 17.874h2.749l3.485-11.582 3.387 11.582h2.885l5.723-17.874h-3.548l-3.666 10.905zM77.474 120.986c-2.097 0-4.059.826-5.414 2.277v-7.859h-4.292v23.843h3.936v-2.29c1.646 1.871 3.388 2.399 5.679 2.399 5.195 0 8.699-4.368 8.699-9.24.001-5.162-3.961-9.13-8.608-9.13zm-.605 14.69a5.41 5.41 0 1 1 0-10.821 5.41 5.41 0 0 1 0 10.821zM101.527 121.829v1.449c-1.355-1.452-3.316-2.278-5.414-2.278-4.646 0-8.609 3.968-8.609 9.131 0 4.871 3.505 9.24 8.699 9.24 2.291 0 4.033-.529 5.679-2.4v2.291h3.936v-17.433h-4.291zm-4.808 13.847a5.41 5.41 0 1 1 0-10.821 5.41 5.41 0 0 1 0 10.821z"/> 
                        </g> </g>
                    </svg>
                </div>
                <div>
                    <svg className="w-24 md:w-36 h-auto mx-6 cursor-pointer" viewBox="-5.3 -1792.9 8666.25 8666.25" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg">
                        <path d="m5201.05 641.04c-13.53 3.96-17.03 10.03-30.44 21.5-10.8 9.23-19.91 15.78-30.39 24.8-23.98 20.65-38.04 33.42-59.13 51.15-104.65 88.04-246.64 225.21-349.23 321.27-159.15 149.02-302.58 292.53-455.26 440.74-287.94 279.51-614.24 615.13-902.44 884.6-238.17 222.69-442.45 422.69-691.34 645.32-95.12 85.08-155.04 162.58-284.55 167.06-213.73 7.38-495.66-174.55-639.84-257.27-125.99-72.28-460.62-269.07-621.94-274.53l118.19 162.36c84.51 128.95 226.6 409.82 294.84 546.49 234.45 469.54 550.96 961.22 953.8 1288.28 103 83.62 196.33 153.92 327.16 233.08 57.39 34.72 115.94 63.6 180.12 99.93 22.25 12.59 176.55 84.65 195.57 84.61-42.26-42.35-85.73-94.09-120.07-134.47-153.36-180.35-494.52-531.02-596.99-710-86.04-150.27-105.81-242.3-10.2-393.13 109.3-172.42 364.18-385.78 524.07-522.54 389.11-332.8 740.02-634.22 1147.14-950.19 192.9-149.71 393.46-302.43 600.91-450.46 203.51-145.21 408.06-285.1 620.51-425.53l320.79-204.14c29.76-17.07 321.94-191.02 326.61-196.85l285.9-157.72c96.02-54.24 189.26-99.52 290.94-154.28 298.37-160.67 890.92-422.55 1230.48-542.34 111.46-39.32 217.67-76.46 330.41-114.98l337.89-105.84c-27.34-14.06-400.68-17.93-469.46-17.94-276.82-.04-446.66 7.68-710.93 28.56-202.26 15.98-578.64 57.5-762.57 101.97-33.11 8-72.31 11.42-105.65 20.2-63.77 16.8-136.77 28.36-202.08 44.62-134.67 33.53-256.94 71.52-383.51 109.26-130.28 38.84-248.11 84.88-364.66 132.83-68.86 28.33-276.96 167.45-294.64 203.59zm2703.87 668.67 245.7-125.47c85.23-40.58 173.38-87.23 253.65-126.46 162.87-79.59 256.68-337.47 254.31-502.79-28.76 1.21-145.77 56.67-177.53 68.3-21.84 7.99-42 14.87-62.46 23.57-145.1 61.65-338.81 134.55-476.35 199.46-39.94 18.85-78.54 34.44-118.96 51.78-31.73 13.61-101.69 41.06-114.73 57.25-43.66-2.22-932.65 438.32-1043.46 495.62-157.77 81.58-356.17 179.36-507.81 263.73-17.96 9.99-480.25 254.66-498.67 278.22-30.44 5.08-347.32 193.25-397.89 221.79-627.03 353.81-1321.46 798.9-1922.06 1206.24-166.91 113.21-380.1 261.73-547.86 388.13l-134.66 100.52c-15.48 11.8-33.74 19.62-42.66 37.33 59.88 51.54 456.55 214.98 551.18 249.09 531.13 191.42 1028.25 324.79 1587.07 420.7l354.64 54.24 279.34 24.64-227.51-20.07c43.42 4.94 86.52 12 128.76 16.04 62.48 5.97 124.46 11.06 188.81 17.51 121.2 12.16 261.93 20.44 386.52 22.64 154.89 2.72 240.23 10.63 367.22-43 98.44-41.57 178.56-93.28 256.81-153.25 291.46-223.35 550.76-572.68 757.62-888.83 216.49-330.86 411.48-700.53 579.56-1066.77 85.61-186.53 165.92-381.15 241.55-579.41 38.33-100.49 71.57-197.54 106.19-304.17 19.17-59.03 88.92-274.54 94.23-322.69-79.51 10.86-1469.62 760.88-1601.89 831.89-179.39 96.31-351.17 196.63-525.22 291.16-169.14 91.87-348.06 200.44-516.36 293.98-341.95 190.05-686.31 401.75-1027.78 599.46-58.55 33.9-493.37 288.09-508.99 305.96 29.23-4.69 1407.81-596.72 1441.19-610.51 65.01-26.88 1418.57-607.72 1440.77-608.69-7.78 31.3-91.56 187.71-112.71 233.68-35.24 76.6-77.73 163.78-116.24 239.96-218.27 431.79-455.16 950.26-931.72 1141.65l-28.63 17.19c-25.54.58-95.31 28.94-126.08 37.39-46.32 12.72-91.09 21.55-137.78 31.11-219.65 44.98-551.71 21.53-780.61-14.28-261.02-40.84-443.79-86.66-696.8-147.82-60.4-14.6-496.94-137.23-522.16-153.89 14.22-24.79 263.88-184.77 285.73-199.95 483.07-335.77 1285.47-829.17 1807.31-1126.07 55.23-31.43 106.56-59.98 157.06-88.92 41.98-24.06 118.82-64.17 152.73-88.81l244.16-133.92c82.56-45.8 158.37-85.48 245.33-135.11 164.4-93.81 330.97-172.45 492.78-263.6 23.79-13.4 947.81-498.95 1005.34-515.74zm-6281.42 2534.49c-9.6-20.39-176.45-197.43-209.6-234.44-210.42-234.95-414.41-453.8-625.9-700.64-147.34-171.96-278.59-330.41-403.81-482.34-52.4-63.57-339.95-424.53-383.88-498.13-5.61 14.15 66.78 310.04 77.47 348.92 16.39 59.64 29.07 113.99 45.79 174.85 163.4 594.9 326.69 820.03 889.36 1107.54 69.31 35.41 573.16 279.12 610.57 284.24z" fill="#000000"/>
                        </svg>
                </div>
                <div>
                    <svg className="w-24 md:w-36 h-auto mx-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 572.4 324.9">
                     <path d="M160.9 162.5c17.6-17.2 28.6-41.2 28.6-67.7C189.5 42.5 147 0 94.7 0 42.5 0 0 42.5 0 94.7c0 26.5 11 50.5 28.6 67.7C11 179.7 0 203.7 0 230.2c0 52.2 42.5 94.7 94.7 94.7s94.7-42.5 94.7-94.7c.1-26.5-10.9-50.5-28.5-67.7m-66.2 91.4c-13.1 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7 23.7 10.6 23.7 23.7c0 13-10.6 23.7-23.7 23.7m0-182.8c13.1 0 23.7 10.6 23.7 23.7s-10.6 23.7-23.7 23.7S71 107.9 71 94.8c.1-13.1 10.7-23.7 23.7-23.7m265.2 91.4c17.6-17.2 28.6-41.2 28.6-67.7C388.5 42.6 346 .1 293.8.1 241.5 0 199 42.5 199 94.7c0 26.5 11 50.5 28.6 67.7-17.6 17.2-28.6 41.2-28.6 67.7 0 52.2 42.5 94.7 94.7 94.7s94.7-42.5 94.7-94.7c0-26.4-10.9-50.4-28.5-67.6m-66.2 91.4c-13.1 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7 23.7 10.6 23.7 23.7c0 13-10.6 23.7-23.7 23.7m0-182.8c13.1 0 23.7 10.6 23.7 23.7s-10.6 23.7-23.7 23.7S270 107.9 270 94.8s10.6-23.7 23.7-23.7m277.1 76.6L489.3 40.6c-3.5-4.8-10.6-4.8-14.1 0l-81.5 107.1c-4.2 5.8-.1 13.9 7.1 13.9H446c2.1 0 3.8 1.7 3.8 3.8v123.1c0 5.8 4.7 10.4 10.4 10.4h43.5c5.8 0 10.4-4.7 10.4-10.4V165.3c0-2.1 1.7-3.8 3.8-3.8h45.8c7.1.1 11.3-8 7.1-13.8z"/>
                    </svg>
                </div>
            </Marquee>
        </div>
      </div>
    </div>
  )
}

export default MarqueeSection