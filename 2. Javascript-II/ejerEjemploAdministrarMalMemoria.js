function buildMassiveString() {
    massiveString = Array(1000).fill("STRING").join();
}
buildMassiveString();

let jin = {role: "vocalist"}
let suga = {role: "rapper"}
let jHope = {role: "rapper"}
let rm = {role: "lead and rapper"}
let jimin = {role: "vocalist"}
let v = {role: "vocalist"}
let jungkook = {role: "vocalist"}

rm.laughingBuddy = jin
suga.bestie = jHope
jungkook.partnerInCrime = v
v.bestie = jimin
v.partnerInCrime = jungkook

let bts = [jin, suga, jHope, rm, jimin, v, jungkook]

console.log(bts)
