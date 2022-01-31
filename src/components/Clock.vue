<template>
  <div class="clock-container">
    <div class="clock">
      <div class="hour">
        <div :style="{transform : hRotate}" id="hr" class="hr"></div>
      </div>
      <div class="min">
        <div :style="{transform : mRotate}" id="mn" class="mn"></div>
      </div>
      <div class="sec">
        <div :style="{transform : sRotate}" id="sc" class="sc"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clock",
  data() {
    return {
      hRotate: "",
      mRotate: "",
      sRotate: ""
    }
  },
  mounted() {
    const deg = 6; 
    setInterval (()=> { 
      const day = new Date(); 
      const hh = day.getHours() * 30; 
      const mm = day.getMinutes() * deg; 
      const ss = day.getSeconds() * deg; 
      this.hRotate = `rotateZ(${(hh)+(mm/12)}deg)`; 
      this.mRotate = `rotateZ(${mm}deg)`; 
      this.sRotate = `rotateZ(${ss}deg)`; 
    })
  }
}
</script>

<style scoped>
.clock-container {
  background: #ffffff50;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clock{
  width: 80%;
  height: 80%;
  display:flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05), 
              inset 0 -15px 15px rgba(255,255,255,0.05), 
              0 -5px 15px rgba(255, 255, 255, 0.3), 
              inset 0 15px 15px rgba(255, 255, 255, 0.3);
  border-radius: 50%;
} 

.clock:before { 
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  z-index : 10;
} 

.clock .hour, 
.clock .min, 
.clock .sec { 
  position: absolute;
} 

.clock .hour .hr{ 
  width : 60px;
  height : 60px;
} 

.clock .min .mn{ 
  width : 90px;
  height : 90px;
} 

.clock .sec .sc{
  width : 30px;
  height : 30px;
} 

.hr, .mn, .sc{
  display:flex;
  justify-content: center;
  border-radius: 50%;
} 

.hr:before{ 
  content: '';
  position: absolute;
  width: 4px;
  height: 30px;
  background:#A6C1EE;
  z-index : 10;
  border-radius: 6px 6px 0 0;
} 
  
.mn:before{ 
  content: '';
  position: absolute;
  width: 2px;
  height: 40px;
  background:#7e9dd3;
  z-index : 10;
  border-radius: 6px 6px 0 0;
} 
  
.sc:before{ 
  content: '';
  position: absolute;
  width: 2px;
  height: 60px;
  background:#fff;
  z-index : 10;
  border-radius: 6px 6px 0 0;
}
</style>