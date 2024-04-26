import { PeerServer } from "peer"

const PORT = 3002

const peerServer = PeerServer({
    port: PORT,
    key: "demodemo",
    path: "/myapp",
    allow_discovery: true
})

peerServer.on("connection", c =>{
    console.log("connection ID:", c.id)
})

peerServer.on("disconnect", c =>{
    console.log("disconnect!", c.id)
})

console.log(`Running Peer JS server on port ${PORT}`)