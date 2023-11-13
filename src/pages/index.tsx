import Lenis from "@studio-freight/lenis";
import React, { useEffect, useRef } from "react";

const Index = () => {
    const lenisWrapperRef = useRef<HTMLDivElement>(null);
    const lenisContentRef = useRef<HTMLDivElement>(null);
    const animationIdRef = useRef<number>();

    useEffect(() => {
        if (!lenisWrapperRef.current || !lenisContentRef.current) return;

        const lenis = new Lenis({
            content: lenisContentRef.current,
            wrapper: lenisWrapperRef.current,
        });

        const raf = (time: DOMHighResTimeStamp) => {
            lenis.raf(time);

            animationIdRef.current = requestAnimationFrame(raf);
        };
        animationIdRef.current = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationIdRef.current ?? 0);
        };
    }, []);

    return (
        <>
            <div
                ref={lenisWrapperRef}
                style={{
                    width: "100dvw",
                    height: "100dvh",
                    overflowY: "scroll",
                }}
            >
                <div ref={lenisContentRef}>
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a<br />
                    a
                </div>
            </div>
        </>
    );
};
export default Index;
