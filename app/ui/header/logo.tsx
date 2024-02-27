import React from "react"
import { useGlobalContext } from "@/app/lib/globalContext"
import { motion } from "framer-motion"
import { breathingAnimation } from "@/app/lib/animations"

const Logo: React.FC = () => {
    const { isMobileNavVisible } = useGlobalContext()

    const firstColorClass = "fill-accent-one"

    const secondColorClass = `${ isMobileNavVisible ? "fill-accent-three" : "fill-accent-two" } ` +
        `transition-colors duration-500 ease-in-out`

    return (
        <motion.svg
            viewBox="0 0 1909.09 2000"
            initial={{ scale: 1 }}
            animate={ breathingAnimation }
            style={{ shapeRendering: "geometricPrecision" }}
            className="h-full"
        >
            <path
                d="M1239.6,1726.06c-15.35-64.65-29.09-126.87-44.44-188.28-34.75-140.2-69.09-280.4-105.45-419.8-21.82-82.83-68.69-149.49-139.39-199.19-38.38-26.67-72.32-58.59-79.6-106.67-4.44-29.09-.81-59.39-.81-84.44-27.47,11.72-56.57,27.47-87.27,37.17-42.02,12.93-84.04,4.04-124.85-8.48-20.61-6.46-39.6-7.27-60.61-.81-26.26,8.08-53.74,11.31-80.4,17.78-6.46,1.62-14.55,8.08-16.97,14.14-13.74,33.94-26.26,68.69-41.21,108.69,77.17-24.65,149.9-47.68,223.03-71.11,1.21,1.62,2.42,2.83,3.64,4.44-72.32,63.84-144.65,127.68-216.57,191.11,37.58-10.51,75.56-23.03,114.34-31.52,74.34-16.57,127.68,12.12,145.45,77.98,12.12,45.66-6.87,84.04-31.11,120.81-2.02,3.23-8.08,4.85-12.12,4.85-48.89,0-93.33,16.57-136.97,36.36-51.31,23.03-102.63,46.87-153.94,69.9-57.37,25.86-116.36,42.02-179.8,27.07-33.94-8.08-76.77-32.32-94.14-53.33,56.16-11.31,73.54-29.49,84.04-88.89,4.04-22.22,6.06-45.25,9.29-72.73-27.47,18.18-50.1,34.34-73.94,48.48-7.68,4.44-18.99,6.46-27.47,4.44-36.36-8.08-72.32-18.18-112.32-28.69,38.38-29.09,72.73-55.35,107.47-81.21,84.85-63.84,170.51-126.87,254.95-191.11,9.29-7.27,16.97-18.59,21.01-29.9,15.35-38.79,29.09-77.98,43.23-115.96-35.15,1.21-42.02,5.66-55.35,38.79-6.46,16.16-13.33,31.92-21.01,50.91-7.68-31.52-15.76-58.99-20.61-87.27-1.21-6.87,5.25-17.78,11.31-22.63,56.57-46.87,113.94-92.12,170.51-138.59,50.91-42.02,107.47-71.92,172.12-84.04,35.15-6.87,71.92-6.87,111.52-10.51,41.21-137.37,83.23-279.19,125.66-421.01h3.64c25.45,91.31,52.12,182.22,75.96,273.94,63.84,247.68,127.68,495.35,188.69,743.84,46.06,187.88,87.27,376.57,130.91,564.85,3.64,14.95.81,25.86-11.72,36.77-23.84,18.99-44.44,40.81-68.69,63.84ZM955.15,730.51c18.18-46.06,35.15-88.08,51.31-130.91,2.02-5.66,1.62-13.33.4-19.39-18.59-86.46-37.17-172.93-55.76-259.8-8.89-41.21-17.78-82.42-27.07-127.27-25.05,131.31-49.7,258.18-73.54,385.45-.81,4.04-.4,9.7,1.62,12.93,33.13,45.66,67.07,90.51,103.03,138.99Z" 
                className={`${ firstColorClass }`}
            />
            <path
                d="M1269.9,672.73c61.82,18.99,123.23,37.58,191.92,58.59-11.31-37.17-21.01-68.28-31.11-99.39-.81-2.83-6.06-4.85-9.29-6.46-3.64-1.62-8.08-1.62-11.72-3.23-48.08-18.99-95.76-25.86-145.86-6.06-13.33,5.25-29.09,6.06-43.64,6.46-40.81,1.21-73.54-20.61-86.46-59.8-10.91-33.13-23.84-67.07-26.26-101.01-8.48-131.72-53.33-255.76-78.38-383.84-6.06-30.71,8.48-52.53,18.99-77.98,34.34,117.17,68.69,234.34,102.22,348.69,37.98,2.83,74.34,3.23,109.49,8.48,49.29,7.68,94.14,27.47,133.33,58.18,60.2,47.27,119.19,96.57,178.99,144.24,12.53,10.1,19.39,19.8,14.55,37.17-6.06,21.01-8.89,43.23-17.37,66.67-6.46-14.14-14.14-27.47-19.39-42.02-9.29-25.86-23.84-44.04-52.53-43.23,14.55,42.02,29.49,85.25,44.85,128.48,2.02,5.66,7.27,10.91,12.12,14.95,94.95,74.75,190.3,149.49,285.66,223.84,23.03,18.18,46.06,36.77,69.09,61.01-37.98,9.7-75.96,19.39-113.94,28.69-4.04.81-10.1-2.83-14.14-5.66-22.63-15.35-44.85-31.11-70.71-49.29,6.46,42.83,4.85,83.23,24.24,120,12.93,25.45,35.15,37.98,67.88,40.81-31.11,23.03-61.41,35.56-95.35,38.79-51.72,5.25-100.61-4.04-145.45-30.3-52.12-30.71-103.84-61.82-155.96-92.53-44.85-26.26-91.72-44.44-144.65-44.04-4.85,0-12.53-4.04-13.74-7.68-8.89-33.54-21.82-67.07-23.84-101.01-2.83-51.31,35.96-86.46,87.27-88.08,48.08-1.62,92.53,14.95,137.37,28.69,3.23.81,6.06,2.02,12.93,4.04-66.67-59.39-130.51-116.36-194.34-173.33,1.21,0,2.02-1.62,3.23-2.83Z"
                className={`${ secondColorClass }`}
            />
            <path
                d="M911.11,1297.37c31.11,32.73,52.93,68.69,65.05,108.28,33.94,111.52,65.86,223.84,96.97,335.76,9.7,35.56,15.76,71.92,22.63,108.28,1.21,6.46.81,16.16-3.23,19.8-43.64,43.64-88.08,86.46-132.93,130.51-15.76-15.76-31.11-30.3-45.25-46.06-3.64-4.04-5.25-10.91-5.25-16.16v-631.11c0-2.02.81-3.64,2.02-9.29Z"
                className={`${ firstColorClass }`}
            />
            <path
                d="M784.65,1836.36c-31.11-32.32-62.63-64.65-93.33-97.78-4.04-4.44-7.68-11.72-7.68-17.37.4-110.3,1.21-220.61,2.02-330.91,0-1.21.81-2.42,2.02-4.85,4.04,2.42,8.08,4.04,11.31,6.87,58.18,52.53,91.31,117.17,91.31,196.77.4,74.75.4,149.49.4,223.84v19.8c-1.62.81-3.64,2.02-6.06,3.64Z"
                className={`${ firstColorClass }`}
            />
            <path
                d="M703.43,404.85c-45.66,15.35-87.68,29.49-132.93,44.85-6.87-118.79-13.74-240.4-21.01-362.02,1.21-.4,2.42-.81,4.04-1.62,50.1,107.07,100.2,213.33,149.9,318.79Z"
                className={`${ firstColorClass }`}
            />
            <path
                d="M1382.22,19.39c-8.48,102.22-17.37,204.44-25.86,305.45-36.77-10.51-73.13-20.61-111.52-31.52,43.64-91.31,87.27-183.03,130.91-275.15,2.02.4,4.44.81,6.46,1.21Z"
                className={`${ secondColorClass }`}
            />
            <path
                d="M1378.99,1591.92c-45.66-150.3-55.35-298.18,23.43-441.62v16.57c-.4,128.89-1.21,258.18-.4,387.07,0,18.99-8.08,29.09-23.03,37.98Z"
                className={`${ secondColorClass }`}
            />
            <path
                d="M594.34,1648.89c-21.82-25.45-49.29-41.21-47.27-81.62,3.64-68.28.4-136.97,0-205.66v-23.84c47.68,50.1,69.9,200.4,47.27,311.11Z"
                className={`${ firstColorClass }`}
            />
        </motion.svg>
    )
}

export default React.memo( Logo )