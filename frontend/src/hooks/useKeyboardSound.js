const keyStrokeSounds = [
    new Audio("/sound/ElevenLabs_A_deep_voice_booming___Feel_the_thud_of_the_bass_drum_echoing_in_your_soul!_.mp3"),
    new Audio("/sounds/ElevenLabs_A_ghostly_figure_moaning___Did_you_hear_that_eerie_woodblock_tap__.mp3")
]

function useKeyboardSound() {
    const playRandomKeyStrokeSound = () => { // this is for a better UX, def add this
        const randomSound = keyStrokeSounds[Math.floor(Math.random() * keyStrokeSounds.length)];

        randomSound.currentTime = 0;
        randomSound.play().catch((error) => console.log("Audio play failed:", error))
    };

    return { playRandomKeyStrokeSound}
}

export default useKeyboardSound;