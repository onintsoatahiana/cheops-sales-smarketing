"use client"; import {create} from "zustand"; import {persist} from "zustand/middleware"; import {Note} from "@/lib/types";
type State={notes:Note[]; addNote:(n:Note)=>void};
export const useCopilotStore=create<State>()(persist((set)=>({notes:[],addNote:(n)=>set(s=>({notes:[n,...s.notes]}))}),{name:"cheops-copilot"}));