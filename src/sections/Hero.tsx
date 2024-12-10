"use client";
import Button from "@/components/Button";
import designExampleImage from "@/assets/images/design-example-1.png";
import designExampleImage2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, [
        leftDesignScope,
        leftPointerScope,
        rightDesignScope,
        rightPointerScope,
        leftDesignAnimate,
        leftPointerAnimate,
        rightDesignAnimate,
        rightPointerAnimate,
    ]);

    return (
        <section
            className="py-24 overflow-x-clip"
            style={{ cursor: `url(${cursorYouImage.src}), auto` }}
        >
            <div className="p-container relative">
                <motion.div
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    ref={leftDesignScope}
                    drag
                    className="absolute -left-32 top-16 hidden lg:block"
                >
                    <Image
                        src={designExampleImage}
                        alt="Design Example 1 image"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    className="absolute -right-64 -top-16 hidden lg:block"
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    drag
                >
                    <Image
                        src={designExampleImage2}
                        alt="Design Example 2 image"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    className="absolute left-56 top-96 hidden lg:block"
                    initial={{ opacity: 0, y: 100, x: -200 }}
                >
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    className="absolute right-80 -top-4 hidden lg:block"
                    initial={{ opacity: 0, x: 275, y: 100 }}
                >
                    <Pointer name="Bryan" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <span className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly.
                </h1>
                <p className="text-center text-xl text-white/15 mt-6 max-w-2xl mx-auto">
                    Design tools souldn&apos;t slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
                <form className="flex outline outline-1 outline-white/15 rounded-full mt-8 p-2 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="bg-transparent px-4 md:flex-1 w-full outline-none"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
