// Page navigation
function goToPage(url){
    document.querySelector('.fade-page').style.opacity=0;
    setTimeout(()=>{window.location.href=url;},500);
}

// Animated text on gallery
window.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.animated-text').forEach((p,i)=>{
        setTimeout(()=>{p.textContent=p.dataset.text;p.style.opacity=1;},i*2000);
    });

    // Proposal buttons
    const yesBtn=document.getElementById('yesBtn');
    const noBtn=document.getElementById('noBtn');
    const resp=document.getElementById('responseMessage');

    if(yesBtn){
        yesBtn.addEventListener('click',()=>{
            resp.innerHTML="💖 Yay! I'm so happy! You make every moment brighter and my heart so warm. Can't wait to make memories with you! 💖";
            resp.classList.remove('hidden');
        });
    }
    if(noBtn){
        noBtn.addEventListener('click',()=>{
            resp.innerHTML="😢 Oh... I guess I'll just cherish the moments we had. Feeling a little sad, but still grateful for you. 😢";
            resp.classList.remove('hidden');
        });
    }

    // Particles for all pages
    function createParticles(canvasId,color='rgba(0,255,255,0.4)',count=50,sizeRange=[2,5],speedRange=[0.5,1.5]){
        const canvas=document.getElementById(canvasId);
        if(!canvas) return;
        const ctx=canvas.getContext('2d');
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
        const particles=[];
        for(let i=0;i<count;i++){
            particles.push({
                x:Math.random()*canvas.width,
                y:Math.random()*canvas.height,
                size:Math.random()*(sizeRange[1]-sizeRange[0])+sizeRange[0],
                speed:Math.random()*(speedRange[1]-speedRange[0])+speedRange[0],
                color:color.replace('0.4',(Math.random()*0.5+0.3).toFixed(2))
            });
        }
        function animate(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            particles.forEach(p=>{
                ctx.beginPath();
                ctx.fillStyle=p.color;
                ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
                ctx.fill();
                p.y-=p.speed;
                if(p.y<0)p.y=canvas.height;
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    createParticles('indexParticles','rgba(0,255,255,0.4)',70);
    createParticles('songParticles','rgba(0,255,255,0.4)',70);
    createParticles('galleryParticles','rgba(255,0,255,0.4)',70);
    createParticles('proposalParticles','rgba(255,0,255,0.4)',70);
});
// Navigation function
function goToPage(url){
    document.querySelector('.fade-page').style.opacity = 0;
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

// Minimal particles for testing
window.addEventListener('DOMContentLoaded',()=>{
    const canvas = document.getElementById('indexParticles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for(let i=0;i<50;i++){
        particles.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            size: Math.random()*4+2,
            speed: Math.random()*1.5+0.5
        });
    }

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(p=>{
            ctx.beginPath();
            ctx.fillStyle = 'rgba(0,255,255,0.4)';
            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
            ctx.fill();
            p.y -= p.speed;
            if(p.y<0)p.y=canvas.height;
        });
        requestAnimationFrame(animate);
    }
    animate();
});
