const video = document.getElementById("video_id")
const play_list = ["VideoM", "v_12", "edit"]
const stop_btn = document.getElementById("stop")
const audio_btn = document.getElementById("audio")
let rewind = 0
function cl_next(){
    if(rewind>=play_list.length - 1){
        rewind = 0
    }else{
        rewind = rewind + 1
    }
    console.log(rewind)
    video.src=`VIDEO/${play_list[rewind]}.webm`
}
function cl_prev(){
    if(rewind != 0){
        rewind = rewind - 1
    }else{
        rewind = play_list.length - 1
    }
    console.log(rewind)
    video.src=`VIDEO/${play_list[rewind]}.webm`
}
function cl_stop(){
    if(video.paused){
        video.play()   
        stop_btn.innerHTML = "stop"
    } else{
        video.pause()
        stop_btn.innerHTML = "resume"
    }

}
function cl_audio(){
    if(video.muted){
        video.muted = false
        audio_btn.innerHTML = "audio"
    } else{
        video.muted = true
        audio_btn.innerHTML = "sound"
    }

}