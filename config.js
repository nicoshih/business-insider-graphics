var config = {
    style: 'mapbox://styles/yshih5/clgmebcep000t01qneomfc23i',
    accessToken: 'pk.eyJ1IjoieXNoaWg1IiwiYSI6ImNsN2dvcGN5djA2bDIzb21uZzM2enBmdHgifQ.Cm4U8hp1bb-1-AQWB5kFSQ',
    showMarkers: true,
    inset: true,
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: CoStar, CBRE, JLL, U.S. Census Bureau; February 2024 <br> Story Written and Designed by Nicole Shih',
    chapters: [
        {id: 'us-overview',
            alignment: 'left',
            hidden: false,
            title: 'The Great Office Exodus: Mapping the U.S. Cities Hit Hardest by Remote Work',
            subtitle: '',
            image: '',
            description: ` <h5>By Nicole Shih</h5>   
            <p>The COVID-19 pandemic fundamentally altered how and where Americans work. While some cities have recovered, others continue to struggle with rising office vacancies, declining new office construction, and the economic ripple effects of remote work.</p> 
            <iframe src="https://flo.uri.sh/visualisation/21872141/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%; height:400px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe>`, 
            
            location: {
                center: [-95.7129, 37.0902],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },

        {
            id: 'us-overview',
            alignment: 'middle',
            hidden: false,
            title: '',
            subtitle: '',
            image: '',
            description: `<iframe src="https://flo.uri.sh/visualisation/21872994/embed" 
                title="Interactive or visual content" class="flourish-embed-iframe" 
                frameborder="0" scrolling="no" style="width:100%; height:600px;" 
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads 
                allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation">
            </iframe>`,
            


            
            location: {
                center: [-95.7129, 37.0902],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },

        {
            id: 'us-overview',
            alignment: 'middle',
            hidden: false,
            title: '',
            subtitle: '',
            image: '',
            description: ' <b style="background-color:#ffcccc; padding:3px;">Red markers</b> indicate cities with the largest increases in office vacancy rates post-COVID, while <b style="background-color:#ccffcc; padding:3px;">green markers</b> highlight cities where office markets have remained the most stable  ',


            
            location: {
                center: [-95.7129, 37.0902],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },

        // Top 3 cities with the highest increase in office vacancy rate
        {
            id: 'san-francisco',
            alignment: 'left',
            hidden: false,
            title: 'San Francisco, CA',
            image: '',
            description: 'San Francisco office vacancy rate rose to 29.3% by the end of January 2025, marking a 560-basis-point year-over-year increase.  ',
            location: {
                center: [-122.4194, 37.7749],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },
        {
            id: 'austin',
            alignment: 'left',
            hidden: false,
            title: 'Austin, TX',
            image: '',
            description: 'Austin experienced the most significant jump in office vacancy rates, increasing by 690 basis points since December 2023, reaching 27.9%.',
            location: {
                center: [-97.7431, 30.2672],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },
        {
            id: 'portland',
            alignment: 'left',
            hidden: false,
            title: 'Portland, OR',
            image: '',
            description: '<p>Vacancy Rate Increase: 620 basis points in 2024. Economic challenges and increased remote work trends.</p>',
            
            location: {
                center: [-122.6750, 45.5051],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },

        {
            id: 'portland',
            alignment: 'middle',
            hidden: false,
            title: '',
            image: '',
            description: ' <iframe src="https://flo.uri.sh/visualisation/21871298/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe>',
            
            location: {
                center: [-122.6750, 45.5051],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },

        // Top 3 cities with the most stable office use
        {
            id: 'miami',
            alignment: 'left',
            hidden: false,
            title: 'Miami, FL',
            image: '',
            description: 'Vacancy Rate Decrease: From 25.1% in Q4 2019 to 19% in Q3 2024. Increased demand from financial services and tech companies establishing a presence in the city.',
            location: {
                center: [-80.1918, 25.7617],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'green', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },
        {
            id: 'san-bernardino',
            alignment: 'left',
            hidden: false,
            title: 'San Bernardino/Riverside, CA',
            image: '',
            description: 'Vacancy Rate Decrease: From 23.8% to 18.6% between Q4 2019 and Q3 2024. Economic diversification and growth in logistics and warehousing sectors.',
            location: {
                center: [-117.2898, 34.1083],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'green', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },
        {
            id: 'atlanta',
            alignment: 'left',
            hidden: false,
            title: 'Atlanta, GA',
            image: '',
            description: 'Vacancy Rate Decrease: From 22% in Q4 2019 to 18.1% in Q3 2024. Robust job growth and a diversified economy.',
            location: {
                center: [-84.3880, 33.7490],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'green', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        }
    ]
};
