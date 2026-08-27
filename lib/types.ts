export type Region="Paris"|"Bordeaux"|"Lyon"|"Lille"|"Nantes";
export type Solution="Cloud privé iCod"|"SOC CyberPatriot"|"EDR"|"PRA"|"HDS";
export type Temperature="Chaud"|"Tiède"|"À relancer";
export interface Contact{role:string;name:string;email:string}
export interface Engagement{date:string;type:string;detail:string;score:number}
export interface Client{id:string;name:string;sector:string;revenue:string;region:Region;contacts:Contact[];solutions:Solution[];renewalDate:string;keywords:string[];interest:string[];engagements:Engagement[];aiRecommendation:string}
export interface Meeting{id:string;clientId:string;time:string;status:"Confirmé"|"À préparer"|"Terminé";objective:string}
export interface Note{id:string;clientId:string;content:string;tag:Temperature;createdAt:string}
export interface Skill{region:Region;technology:string;count:number}