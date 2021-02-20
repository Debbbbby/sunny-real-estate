<template>
    <div id="property-detail">
        <div class="carousel">
            <img v-for="(img, index) of propertyData.imgUrls" :key="img"
                :class="{active: index === 0}" class="carousel-img" :src="img" alt="property image">
        </div>
        <h2 class="property-title">{{propertyData.title}}</h2>
        <div class="price-wrap">
            <span class="price-title">{{priceTitle}}</span>&thinsp;
            <span class="price">{{propertyData.price}}</span>&thinsp;
            <span class="price-unit">{{priceUnitText}}</span>
        </div>
        <div class="main-info-wrap">
            <div class="building-wrap">
                <h4>建物</h4>
                <div v-if="propertyData.buildingSpace_total" class="info-box">
                    <p class="info-box-title">總建坪</p>
                    <p class="info">{{propertyData.buildingSpace_total}}</p>
                </div>
                <div v-if="propertyData.buildingSpace_main" class="info-box">
                    <p class="info-box-title">主建物</p>
                    <p class="info">{{propertyData.buildingSpace_main}}</p>
                </div>
                <div v-if="propertyData.buildingSpace_sub" class="info-box">
                    <p class="info-box-title">附屬建物</p>
                    <p class="info">{{propertyData.buildingSpace_sub}}</p>
                </div>
                <div v-if="propertyData.buildingSpace_shared" class="info-box">
                    <p class="info-box-title">共有部分</p>
                    <p class="info">{{propertyData.buildingSpace_shared}}</p>
                </div>
                <div v-if="propertyData.buildingSpace_parking" class="info-box">
                    <p class="info-box-title">車位坪數</p>
                    <p class="info">{{propertyData.buildingSpace_parking}}</p>
                </div>
                <div v-if="propertyData.buildingSpace_extra" class="info-box">
                    <p class="info-box-title">增建坪數</p>
                    <p class="info">{{propertyData.buildingSpace_extra}}</p>
                </div>
            </div>
            <div class="land-wrap">
                <h4>土地</h4>
                <div v-if="propertyData.landSpace_total" class="info-box">
                    <p class="info-box-title">總地坪</p>
                    <p class="info">{{propertyData.landSpace_total}}</p>
                </div>
                <div v-if="propertyData.landSpace_warrant" class="info-box">
                    <p class="info-box-title">權狀地坪</p>
                    <p class="info">{{propertyData.landSpace_warrant}}</p>
                </div>
                <div v-if="propertyData.landSpace_hold" class="info-box">
                    <p class="info-box-title">持分面積</p>
                    <p class="info">{{propertyData.landSpace_hold}}</p>
                </div>
                <div v-if="propertyData.landSpace_other" class="info-box">
                    <p class="info-box-title">其他用地</p>
                    <p class="info">{{propertyData.landSpace_other}}</p>
                </div>
                <div v-if="propertyData.landSpace_coverage" class="info-box">
                    <p class="info-box-title">建蔽</p>
                    <p class="info">{{propertyData.landSpace_coverage}}</p>
                </div>
                <div v-if="propertyData.landSpace_capacity" class="info-box">
                    <p class="info-box-title">容積</p>
                    <p class="info">{{propertyData.landSpace_capacity}}</p>
                </div>
                <div v-if="propertyData.landSpace_width" class="info-box">
                    <p class="info-box-title">面寬</p>
                    <p class="info">{{propertyData.landSpace_width}}</p>
                </div>
                <div v-if="propertyData.landSpace_depth" class="info-box">
                    <p class="info-box-title">縱深</p>
                    <p class="info">{{propertyData.landSpace_depth}}</p>
                </div>
            </div>
        </div>
        <div class="description">
            <h4>概況說明</h4>
            <p v-html="propertyData.description"></p>
        </div>
        <div class="location">
            <h4>地點</h4>
            <p class="address">{{propertyData.address}}</p>
            <!--The div element for the map -->
            <div id="map"></div>
        </div>
    </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
    name: "PropertyDetail",
    data() {
        return {
            propertyData: {},
            // propertyData_forTestWrite: {
            //     imgUrls: [
            //         "https://picsum.photos/id/1076/1600/900",
            //         "https://picsum.photos/id/221/1600/900",
            //         "https://picsum.photos/id/514/1600/900"
            //     ],
            //     title: "大園航空城海豐坡華夏",
            //     forRentSell: 0, // 0-售, 1-租
            //     price: 520,
            //     priceUnit: 1, // 0-千, 1-萬, 2-億
            //     buildingSpace_total: 40.59,
            //     buildingSpace_main: 26.58,
            //     buildingSpace_sub: 2.66,
            //     buildingSpace_shared: 11.35,
            //     buildingSpace_parking: null,
            //     buildingSpace_extra: null,
            //     landSpace_total: 10.37,
            //     landSpace_warrant: null,
            //     landSpace_hold: 10.37,
            //     landSpace_other: null,
            //     landSpace_coverage: null,
            //     landSpace_capacity: null,
            //     landSpace_width: null,
            //     landSpace_depth: null,
            //     address: "桃園市大園區海豐坡1之16號7樓（八樓增建）",
            //     description: "<p>屋齡：82年06月30日建築完成<br/>格局：七樓3房2廳1衛2陽台<br/>八樓2房1廳2衛1陽台<br/>樓層：7樓/7樓（8樓增建未辦保存登記）<br/>朝向：坐東北做東北朝西南<br/>地下一樓有1個車位</p>"
            // },
            /** 價格標頭（總價/租金） */
            priceTitle: "",
            /** 價格單位文字 */
            priceUnitText: "",
            /** Google Maps JavaScript API Loader */
            GMloader: new Loader({
                apiKey: "AIzaSyB70qwoLeaN4QyIXAbWI4ufQgS2XK41an4",
                version: "weekly",
                libraries: ["places"]
            }),
            /** Google Maps 顯示配置 */
            mapOptions: {
                center: {
                    lat: 25.0157902,
                    lng: 121.2115798
                },
                zoom: 15
            }
        }
    },
    mounted() {
        // this.testWrite();
        this.testRead();
        this.GMloader.load()
            .then(() => {
                const map = new window.google.maps.Map(document.getElementById("map"), this.mapOptions);
                new window.google.maps.Marker({
                    position: this.mapOptions.center,
                    map: map,
                });
            })
            .catch(() => {
                console.warn('Failed to load Google Maps!');
            });
    },
    methods: {
        /** 轉換價格標題 */
        transPriceTitle() {
            if (this.propertyData.forRentSell === 0) {
                this.priceTitle = "總價";
            } else {
                this.priceTitle = "租金";
            }
        },
        /** 將總價單位轉為文字 */
        transPriceUnit() {
            switch (this.propertyData.priceUnit) {
                case 0:
                    return this.priceUnitText = "千";
                case 1:
                    return this.priceUnitText = "萬";
                case 2:
                    return this.priceUnitText = "億";
            }
        },
        /** 測試寫資料進 Firebase */
        testWrite() {
            fetch('https://sunny-real-estate-ba169-default-rtdb.firebaseio.com/testWrite.json', {
                method: 'POST', // get, delete, patch, ...
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.propertyData_forTestWrite)
            })
            .then((response) => {
                // triggered when we have a regular response
                if (response.ok) {
                    // ...
                } else {
                    // e.g. when we have a 400- 500- status code
                    throw new Error('Could not save data!')
                    // the Error will reach the 'catch' below
                }
            })
            .catch((error) => {
                // Sending data failed
                console.log('error - Sending data failed:', error)
                // console.log('error - from response not ok above:', error.message)
            });
            console.log('testWrite');
        },
        /** 測試讀取 Firebase 資料 */
        testRead() {
            fetch('https://sunny-real-estate-ba169-default-rtdb.firebaseio.com/testWrite.json')
            .then((response) => {
                if (response.ok) {
                    // successful
                    return response.json();
                }
            }).then((data) => {
                // triggered when the 'return' promise in 'response.ok' is done
                // console.log('data:', Object.values(data)[0]);
                this.propertyData = Object.values(data)[0];
                console.log('propertyData:', this.propertyData);
                this.transPriceTitle();
                this.transPriceUnit();
            })
            .catch((error) => {
                // triggered when any error occurs in the prvious 'then' blocks
                console.log('error:', error)
            });
        }
    }
}
</script>

<style scoped lang="scss">
$theme-orange: #F96303;
#property-detail {
    padding: 0px 20px;
}
.carousel {
    margin: 15px 0px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
    // background-color: #ffed68; // $theme-color
    img {
        display: none;
        &.active {
            display: block;
        }
    }
}
h2.property-title {
    margin: 0px 0px 10px 0px;
}
.price-wrap {
    // margin: 10px 0px;
    display: inline-block;
    margin: 0px;
    padding: 6px 12px;
    border-radius: 6px;
    text-align: center;
    font-size: 22px;
    background-color: $theme-orange;
    color: #fff;
    .price {
        font-weight: bold;
    }
    .price-title, .price-unit {
        font-size: 14px;
    }
}
.main-info-wrap {
    .info-box {
        display: inline-block;
        margin: 0px 10px 10px 0px;
        padding: 8px 10px;
        border-radius: 6px;
        background-color: #F6F6F6;
        min-width: 90px;
        p {
            margin: 0px;
        }
        .info-box-title {
            margin-bottom: 3px;
            color: #9A9A9A;
            font-size: 10px;
        }
        .info {
            font-size: 22px;
            color: $theme-orange;
        }
    }
}
// .address {
//     // color: $gray-text;
//     color: #767a86;
// }
.description, .location {
    p {
        color: #7a7a7a;
    }
}
#map {
  height: 400px;
  /* The height is 400 pixels */
  width: 100%;
  /* The width is the width of the web page */
}
</style>