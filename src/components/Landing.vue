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
          <article>
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
          <article>
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
