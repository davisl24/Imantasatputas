import type {ReactNode} from "react";
type Name="home"|"wifi"|"utensils"|"users"|"flame"|"sun"|"calendar"|"flower"|"candle"|"bed";
const paths:Record<Name,ReactNode>={
home:<><path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/></>,
wifi:<><path d="M2 8a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M9 16a5 5 0 0 1 6 0"/><path d="M12 20h.01"/></>,
utensils:<><path d="M4 3v7a3 3 0 0 0 6 0V3M7 3v18"/><path d="M17 21V3c-5 3-5 9 0 11"/></>,
users:<><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2"/><path d="M17 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v1"/></>,
flame:<path d="M12 22c5 0 8-3 8-8 0-4-3-7-5-9 0 4-2 5-3 6-1-3-1-5-1-9C7 6 4 10 4 14c0 5 3 8 8 8Z"/>,
sun:<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
calendar:<><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M7 3v4m10-4v4M3 10h18"/></>,
flower:<><circle cx="12" cy="12" r="2"/><path d="M12 10c-5-8-9 0-4 2-8 5 0 9 4 4 5 8 9 0 4-4 8-5 0-9-4-4Z"/></>,
candle:<><path d="M9 11h6v10H9zM12 9c-2-2-1-4 0-6 1 2 2 4 0 6ZM7 21h10"/></>,
bed:<><path d="M3 18V8m18 10V8M3 16h18M5 16v-6h14v6M3 20v-2m18 2v-2"/></>
};
export function FeatureIcon({name}:{name:Name}){return <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>}
