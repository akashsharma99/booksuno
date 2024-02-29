import { create } from 'zustand'

export const useAudioURL = create((set) => ({
    globalAudioURL: "",
    isPlaying: false,
    duration: 0,
    audioInfo: { audioName: "", audioAuthor: "" },
    updateGlobalAudioURL: (newURL: string) => set({ globalAudioURL: newURL }),
    updateIsPlaying: (play: boolean) => set({ isPlaying: play }),
    updateAudioInfo: (info: any) => set({ audioInfo: { audioName: info.audioName, audioAuthor: info.audioAuthor } }),
    updateDuration: (newDuration: number) => set({ duration: newDuration })
}))

export const useUserDetails = create((set) => ({
    userDetails: null,
    updateUserDetails: (details: any) => set({ userDetails: details }),
}))

export const useBookInfo = create((set) => ({
    bookInfo: null,
    updateBookInfo: (details: any) => set({ bookInfo: details })
}))

export const useSearch = create((set) => ({
    searchResults: null,
    updateSearchResults: (results: any) => set({ searchResults: results })
}))