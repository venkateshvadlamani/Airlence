<template>
  <div class="landing">

        <section class="hero">
          <header>
              <div class="title">
                <h1>PROFESSIONAL DRONE SERVICES</h1>
                <p>WE PROVIDE AERIAL IMAGES AND VIDEO SERVICES FOR ANY OCCASION and 
                  ANY BUSINESS. We take pride in our work and provide our SERVICES
                  to customers all over Northwest Arkansas.</p>
                <a class="button" href="#customers">Learn more</a>
              </div>
          </header> 
        </section>

        <section class="customers" id="customers">
          <article class="business">
            <img src="../assets/commercial-buildings.jpg">
            <h3>Business Services</h3>
            <ul>
              <li>Commercial Real Estate</li>
              <li>Residential Real Estate</li>
              <li>Construction</li>
              <li>Telecom</li>
              <li>Insurance</li>
              <li>Other</li>
            </ul>            
          </article>
          <article class="personal">
            <img src="../assets/basketball-court.jpg">
            <h3>Personal Services</h3>
            <ul>
              <li>Weddings</li>
              <li>Block Parties</li>
              <li>Graduation</li>
              <li>Parades</li>
              <li>Other</li>
            </ul>            
          </article>
        </section>

        <section class="pricing">
          <h2>Pricing</h2>
          <h4>Our drone packages include up to one hour of flight time on site. The flight will
            occur within 48 hours of confirmation weather permitting.
          </h4>
          <article class="basic">
              <h4>Basic Package</h4>
              <h6>
                <span>$</span>
                <span>99</span>
                <span>per listing</span>
              </h6>
              <ul>
                <li>One 360 degree Panoramic view</li>    
                <li>2 business days turnaround from flight date</li>
              </ul>
          </article>
          <article class="popular">
              <h4>Popular Package</h4>
              <h6>
                <span>$</span>
                <span>199</span>
                <span>per listing</span>
              </h6>
              <ul>
                <li>10 high definition aerial video clips</li>    
                <li>15 high resolution aerial images</li>    
                <li>2 business days turnaround from flight date</li>
              </ul>
          </article>
          <article class="premium">
              <h4>Premium Package</h4>
              <h6>
                <span>$</span>
                <span>699</span>
                <span>per listing</span>
              </h6>
              <ul>
                <li>10 high definition aerial video clips</li>    
                <li>15 high resolution aerial images</li>   
                <li>60 second video with Branding, Text Captions, Music and Thermal Imaging</li>   
                <li>2 business days turnaround from flight date</li>
              </ul>
          </article>          
        </section>

  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>
<style lang="scss" scoped>
@import "../styles/landing.scss";
</style>
