import UploadBox from "@/app/components/UploadBox";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            <div className="relative inline-block">
            {/*<h1 className="text-4xl font-bold mb-6">AI Meme Generator  🚀</h1>*/}
                <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text">
                    AI Meme Generator ✨🚀
                </h1>

                {/* Sparkles */}
                <span className="absolute -top-2 -left-4 text-yellow-300 animate-twinkle">✦</span>
                <span className="absolute -bottom-3 left-10 text-pink-400 animate-twinkle delay-300">★</span>
                <span className="absolute -top-3 right-6 text-indigo-400 animate-twinkle delay-700">✧</span>
            </div>
            <p className="text-lg mb-8 leading-relaxed bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 dark:from-gray-300 dark:via-gray-400 dark:to-gray-300 bg-clip-text text-transparent drop-shadow-m animate-paragraph-shimmer">
  Upload an image, let AI do the funny stuff.
            {/*<p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed*/}
            {/*  bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 dark:from-gray-300 dark:via-gray-400 dark:to-gray-300 bg-clip-text*/}
            {/*  drop-shadow-sm">*/}
            </p>

            {/*<p className="text-lg text-gray-600 mb-8">*/}
            {/*    Upload an image, let AI do the funny stuff.*/}
            {/*</p>*/}
            <UploadBox />
        </main>
    );
}