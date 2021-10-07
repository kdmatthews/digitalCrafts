import { createClient } from "@supabase/superbase-js";
import { useSelector } from "react-redux";


const supabase = createClient(
// supabase info
)

export function createUserFromLogin(userData){
const { data, error } = await supabase
    .from("reduxUserRegister")
    .insert([userData])
}