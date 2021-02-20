<template>
    <div id="home">
        <section id="latest">
            <h3>最新案件</h3>
            <div class="section-content">
                <div id="top-carousel" class="carousel">
                    <div class="carousel-box active">
                        <router-link :to="{name: 'PropertyDetail', params: { PropertyId: 11 }}" class="box-link">
                            <img src="https://picsum.photos/id/1031/1600/900" alt="">
                        </router-link>
                    </div>
                    <div class="carousel-box">
                        <router-link :to="{name: 'PropertyDetail', params: { PropertyId: 12 }}" class="box-link">
                            <img src="https://picsum.photos/id/1079/1600/900" alt="">
                        </router-link>
                    </div>
                    <div class="carousel-box">
                        <router-link :to="{name: 'PropertyDetail', params: { PropertyId: 13 }}" class="box-link">
                            <img src="https://picsum.photos/id/1081/1600/900" alt="">
                        </router-link>
                    </div>
                    <div class="carousel-btn prev">
                        <i class="icon-left-open"></i>
                    </div>
                    <div class="carousel-btn next">
                        <i class="icon-right-open"></i>
                    </div>
                </div>
                <div class="property-title">
                    <h4 class="ellipsis-text">全新商辦大樓全新商辦大樓全新商辦大樓全新商辦大樓全新商辦大樓</h4>
                </div>
            </div>
        </section>
        <section id="land">
            <h3>土地精選</h3>
            <div class="section-content">
                <div id="land-carousel" class="carousel">
                    <div class="carousel-box active">
                        <router-link :to="{name: 'PropertyDetail', params: { PropertyId: 21 }}" class="box-link">
                            <img src="https://picsum.photos/id/1001/1600/900" alt="">
                        </router-link>
                    </div>
                    <div class="carousel-box">
                        <router-link :to="{name: 'PropertyDetail', params: { PropertyId: 22 }}" class="box-link">
                            <img src="https://picsum.photos/id/1072/1600/900" alt="">
                        </router-link>
                    </div>
                    <div class="carousel-box">
                        <router-link :to="{name: 'PropertyDetail', params: { PropertyId: 23 }}" class="box-link">
                            <img src="https://picsum.photos/id/128/1600/900" alt="">
                        </router-link>
                    </div>
                    <div class="carousel-btn prev">
                        <i class="icon-left-open"></i>
                    </div>
                    <div class="carousel-btn next">
                        <i class="icon-right-open"></i>
                    </div>
                </div>
                <div class="property-title">
                    <h4 class="ellipsis-text">土地精選土地精選土地精選土地精選土地精選土地精選土地精選土地精選</h4>
                </div>
            </div>
        </section>
        <section id="condo">
            <h3>大樓精選</h3>
            <div class="section-content">
                <div id="land-carousel" class="carousel">
                    <div class="carousel-box active">
                        <router-link :to="{name: 'PropertyDetail', params: { PropertyId: 31 }}" class="box-link">
                            <img src="https://picsum.photos/id/1078/1600/900" alt="">
                        </router-link>
                    </div>
                    <div class="carousel-box">
                        <router-link :to="{name: 'PropertyDetail', params: { PropertyId: 32 }}" class="box-link">
                            <img src="https://picsum.photos/id/1075/1600/900" alt="">
                        </router-link>
                    </div>
                    <div class="carousel-box">
                        <router-link :to="{name: 'PropertyDetail', params: { PropertyId: 31 }}" class="box-link">
                            <img src="https://picsum.photos/id/1076/1600/900" alt="">
                        </router-link>
                    </div>
                    <div class="carousel-btn prev">
                        <i class="icon-left-open"></i>
                    </div>
                    <div class="carousel-btn next">
                        <i class="icon-right-open"></i>
                    </div>
                </div>
                <div class="property-title">
                    <h4 class="ellipsis-text">大樓精選大樓精選大樓精選大樓精選大樓精選大樓精選大樓精選</h4>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped lang="scss">
section {
    margin-bottom: 40px;
    padding: 0px 20px;
    .section-content {
        box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        overflow: hidden;
    }
    .property-title {
        padding: 0px 10px;
    }
}
.carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
    .carousel-box {
        display: none;
        &.active {
            display: block;
        }
    }
    .carousel-btn {
        position: absolute;
        top: 0;
        height: 100%;
        padding: 0px 17px;
        cursor: pointer;
        i {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 20px;
            color: #fff;
        }
        &.prev {
            left: 0;
        }
        &.next {
            right: 0;
        }
    }
}

// RWD
@media (max-width: 1024px) {
}
@media (max-width: 900px) {
}
@media (max-width: 768px) {
}
@media (max-width: 720px) {
    .h-400 {
        height: 400px;
    }
}
@media (max-width: 480px) {
}
@media (min-width: 320px) and (max-width: 350px) {
}
</style>