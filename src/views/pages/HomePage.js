import Header from '../layouts/header';

const HomePage = () => {
    return`
    <section class="main-section">
    <div class="main-section-nav--left"></div>
    <div class="main-section-content--right">
    ${Header()}
    
    </div>
    </section>
    `;

};

export default HomePage;