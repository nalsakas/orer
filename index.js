"use strict"

// istasyon tablosu
const stationData = [{
        id: "Mersin", // id -- name
        altitude: 0
    },
    {
        id: "Km.3+500",
        altitude: 3
    },
    {
        id: "Tırmıl",
        altitude: 3
    },
    {
        id: "Karacailyas",
        altitude: 4
    },
    {
        id: "Taşkent",
        altitude: 4
    },
    {
        id: "Huzurkent",
        altitude: 5
    },
    {
        id: "Tarsus",
        altitude: 2
    },
    {
        id: "Km.41+516",
        altitude: 3
    },
    {
        id: "Yenice Müselles",
        altitude: 2
    },
    {
        id: "Yenice",
        altitude: 6
    },
    {
        id: "Zeytinli",
        altitude: 2
    },
    {
        id: "Şehitlik",
        altitude: 3
    },
    {
        id: "Şakirpaşa",
        altitude: 4
    },
    {
        id: "Adana",
        altitude: 6
    },
]

// hat tablosu
const lineData = [{
    id: "Mersin Adana", // name - id
    stations: [{
            stationId: "Mersin",
            km: 0,
            offset: 0
        },
        {
            stationId: "Km.3+500",
            km: 3500,
            offset: 0
        },
        {
            stationId: "Tırmıl",
            km: 5954,
            offset: 0
        },
        {
            stationId: "Karacailyas",
            km: 8290,
            offset: 0
        },
        {
            stationId: "Taşkent",
            km: 14113,
            offset: 0
        },
        {
            stationId: "Huzurkent",
            km: 19034,
            offset: 0
        },
        {
            stationId: "Tarsus",
            km: 26222,
            offset: 0
        },
        {
            stationId: "Km.41+516",
            km: 41516,
            offset: -20
        },
        {
            stationId: "Yenice Müselles",
            km: 41537,
            offset: 0
        },
        {
            stationId: "Yenice",
            km: 43209,
            offset: 0
        },
        {
            stationId: "Zeytinli",
            km: 51121,
            offset: 0
        },
        {
            stationId: "Şehitlik",
            km: 60244,
            offset: 0
        },
        {
            stationId: "Şakirpaşa",
            km: 64313,
            offset: 0
        },
        {
            stationId: "Adana",
            km: 67148,
            offset: 0
        }
    ]
}]

// orer tablosu
const orerData = [{
        id: "63021", // orer id
        version: 1,
        trainType: "Yük",
        validFrom: "2021-01-01",
        validTo: "2021-02-01",
        stations: [{
                lineId: "Mersin Adana",
                stationId: "Adana",
                maxSpeed: "70",
                arrival: "",
                departure: "00:20",
                meets: "",
                overtake: "",
                km: 67148
            },
            {
                lineId: "Mersin Adana",
                stationId: "Şehitlik",
                maxSpeed: "30",
                arrival: "00:27",
                departure: "00:28",
                meets: "",
                overtake: "",
                km: 60244
            },
            {
                lineId: "Mersin Adana",
                stationId: "Zeytinli",
                maxSpeed: "70",
                arrival: "00:36",
                departure: "00:37",
                meets: "",
                overtake: "",
                km: 51121
            },
            {
                lineId: "Mersin Adana",
                stationId: "Yenice",
                maxSpeed: "70",
                arrival: "00:45",
                departure: "01:05",
                meets: "",
                overtake: "",
                km: 43209
            },
            {
                lineId: "Mersin Adana",
                stationId: "Yenice Müselles",
                maxSpeed: "70",
                arrival: "",
                departure: "01:07",
                meets: "",
                overtake: "",
                km: 41537
            },
            {
                lineId: "Mersin Adana",
                stationId: "Km.41+516",
                maxSpeed: "70",
                arrival: "",
                departure: "01:09",
                meets: "",
                overtake: "",
                km: 41516
            },
            {
                lineId: "Mersin Adana",
                stationId: "Tarsus",
                maxSpeed: "70",
                arrival: "",
                departure: "01:26",
                meets: "",
                overtake: "",
                km: 26222
            },
            {
                lineId: "Mersin Adana",
                stationId: "Huzurkent",
                maxSpeed: "70",
                arrival: "",
                departure: "01:35",
                meets: "",
                overtake: "",
                km: 19034
            },
            {
                lineId: "Mersin Adana",
                stationId: "Taşkent",
                maxSpeed: "70",
                arrival: "01:42",
                departure: "02:02",
                meets: "",
                overtake: "",
                km: 14113
            },
            {
                lineId: "Mersin Adana",
                stationId: "Karacailyas",
                maxSpeed: "70",
                arrival: "",
                departure: "02:11",
                meets: "",
                overtake: "",
                km: 8290,
            },
            {
                lineId: "Mersin Adana",
                stationId: "Tırmıl",
                maxSpeed: "70",
                arrival: "02:15",
                departure: "02:45",
                meets: "",
                overtake: "",
                km: 5954,
            },
            {
                lineId: "Mersin Adana",
                stationId: "Km.3+500",
                maxSpeed: "70",
                arrival: "",
                departure: "02:50",
                meets: "",
                overtake: "",
                km: 3500
            },
            { //
                lineId: "Mersin Adana",
                stationId: "Mersin",
                maxSpeed: "40",
                arrival: "02:55",
                departure: "",
                meets: "",
                overtakes: "",
                km: 0
            }
        ]
    },
    {
        id: "63022", // orer id
        version: 1,
        trainType: "Yük",
        validFrom: "2021-01-01",
        validTo: "2021-02-01",
        stations: [{
                lineId: "Mersin Adana",
                stationId: "Mersin",
                maxSpeed: "70",
                arrival: "",
                departure: "03:15",
                meets: "",
                overtake: "",
                km: 0
            },
            {
                lineId: "Mersin Adana",
                stationId: "Tırmıl",
                maxSpeed: "30",
                arrival: "03:27",
                departure: "03:57",
                meets: "",
                overtake: "",
                km: 5954
            },
            {
                lineId: "Mersin Adana",
                stationId: "Taşkent",
                maxSpeed: "30",
                arrival: "04:11",
                departure: "04:31",
                meets: "",
                overtake: "",
                km: 14113
            },
            {
                lineId: "Mersin Adana",
                stationId: "Tarsus",
                maxSpeed: "30",
                arrival: "04:47",
                departure: "04:47",
                meets: "",
                overtake: "",
                km: 26222
            },
            {
                lineId: "Mersin Adana",
                stationId: "Adana",
                maxSpeed: "30",
                arrival: "05:56",
                departure: "",
                meets: "",
                overtake: "",
                km: 67148
            },
        ]
    }
]

// Create svg element
const margin = {
    left: 400,
    right: 30,
    top: 120,
    bottom: 30
}

const proportion = 9 / 16
const totalWidth = 1800
const totalHeight = totalWidth * proportion
const width = totalWidth - margin.left - margin.right
const height = totalHeight - margin.top - margin.bottom

const altitudeLeftPos = 90
const lineStationSchemaLeftPos = 100
const lineStationsLeftPos = 230
const lineKmBetweenLeftPos = 300
const lineKmLeftPos = 370

const line = lineData.find(l => l.id == "Mersin Adana")

const scaleX = d3.scaleTime()
    .range([0, width])
    .domain([
        new Date(2000, 0, 1, 0, 0),
        new Date(2000, 0, 1, 23, 59)
    ])

const scaleY = d3.scaleLinear()
    .range([0, height])
    .domain([
        d3.min(line.stations, ls => ls.km),
        d3.max(line.stations, ls => ls.km)
    ])

const svg = d3.select('body').append('svg').attr('width', totalWidth).attr('height', totalHeight)
const groupGridX = svg.append('g').attr('class', 'girdX').attr('transform', `translate(${margin.left}, ${margin.top})`)
const groupGridY = svg.append('g').attr('class', 'gridY').attr('transform', `translate(${margin.left}, ${margin.top})`)
const groupTopLabel = svg.append('g').attr('class', 'topLabel').attr('transform', `translate(${margin.left}, ${margin.top})`)
const groupBottomLabel = svg.append('g').attr('class', 'bottomLabel').attr('transform', `translate(${margin.left}, ${margin.top})`)
const groupRightLabel = svg.append('g').attr('class', 'rightLabel').attr('transform', `translate(${margin.left}, ${margin.top})`)
const groupLeftLabel = svg.append('g').attr('class', 'rightLabel').attr('transform', `translate(${margin.left}, ${margin.top})`)
const groupLeftLineKm = svg.append('g').attr('class', 'leftLineKm').attr('transform', `translate(${lineKmLeftPos}, ${margin.top})`)
const groupLeftLineKmBetween = svg.append('g').attr('class', 'leftLineKmBetween').attr('transform', `translate(${lineKmBetweenLeftPos}, ${margin.top})`)
const groupLeftLineStation = svg.append('g').attr('class', 'leftLineStation').attr('transform', `translate(${lineStationsLeftPos}, ${margin.top})`)
const groupLeftLineStationSchema = svg.append('g').attr('class', 'leftLineStationSchema').attr('transform', `translate(${lineStationSchemaLeftPos}, ${margin.top})`)
const groupLeftLineStationAltitude = svg.append('g').attr('class', 'leftLineStationAltitude').attr('transform', `translate(${altitudeLeftPos}, ${margin.top}) rotate(90)`)
const group = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

// Company Header
svg.append('text').html(
        `<tspan x = 20 dy = 1.2em>T.C.</tspan>` +
        `<tspan x = 20 dy = 1.2em>Devlet Demiryolları İşletmesi</tspan>` +
        `<tspan x = 20 dy = 1.2em>Genel Müdürlüğü</tspan>`
    )
    .attr('x', 20)
    .attr('y', 10)
    .attr('font-weight', 800)
    .attr('font-size', 16)

// Line Header
svg.append('text').html(
        `<tspan x = ${totalWidth / 2} dy = 1.2em>${line.id} Hat Kesimi</tspan>` +
        `<tspan x = ${totalWidth / 2} dy = 1.2em></tspan>`
    )
    .attr('x', totalWidth / 2)
    .attr('y', 10)
    .attr('text-anchor', 'start')
    .attr('font-weight', 800)
    .attr('font-size', 16)

// Create GridX
const dataDomainX = d3.range(0, 24 * 60, 10)
const scaleGridX = d3.scaleLinear()
    .domain(d3.extent(dataDomainX))
    .range([0, width])

const gridX = groupGridX.selectAll('line').data(dataDomainX)
gridX.enter().append('line')
    .attr('x1', (d, i) => scaleGridX(d))
    .attr('x2', (d, i) => scaleGridX(d))
    .attr('y1', 0)
    .attr('y2', height)
    .attr('stroke', 'red')
    .attr('stroke-dasharray', (d, i) => {
        if (d % 60 == 0) {
            return ""
        } else {
            return "3,1"
        }
    })
    .attr('stroke-width', (d, i) => {
        if (d % 60 == 0) {
            return 1
        } else {
            return 0.5
        }
    })

// Create GridY
const gridY = groupGridY.selectAll('line').data(line.stations)
gridY.enter().append('line')
    .attr('x1', -10)
    .attr('x2', width)
    .attr('y1', (d, i) => {
        return scaleY(d.km) + d.offset
    })
    .attr('y2', (d, i) => {
        return scaleY(d.km) + d.offset
    })
    .attr('stroke', 'red')
    .attr('stroke-width', 1)

// Create Bottom Labels
const bottomLabels = groupBottomLabel.selectAll('text').data(dataDomainX)
bottomLabels.enter().append('text')
    .text((d, i) => {
        if (d % 60 == 0) {
            return d / 60
        }
    })
    .attr('x', d => scaleGridX(d))
    .attr('y', height)
    .attr('dy', 25)
    .attr('dx', -5)

// Create Top Labels
const topLabels = groupTopLabel.selectAll('text').data(dataDomainX)
bottomLabels.enter().append('text')
    .text((d, i) => {
        if (d % 60 == 0) {
            return d / 60
        }
    })
    .attr('x', d => scaleGridX(d))
    .attr('y', 0)
    .attr('dy', -15)
    .attr('dx', -5)

// Create Left Line kms
const leftLineKms = groupLeftLineKm.selectAll('text').data(line.stations)
leftLineKms.enter().append('text')
    .attr('text-anchor', 'end')
    .text((d, i) => {
        return d.km
    })
    .attr('x', 0)
    .attr('y', (d, i) => {
        return scaleY(d.km) + d.offset
    })
    .attr('dy', 5)
    .attr('dx', 0)

// Create Left Line kms between
const leftLineKmsBetween = groupLeftLineKmBetween.selectAll('text').data(line.stations)
leftLineKmsBetween.enter().append('text')
    .attr('text-anchor', 'end')
    .text((d, i) => {
        if (i !== line.stations.length - 1) {
            return line.stations[i + 1].km - line.stations[i].km
        }
    })
    .attr('x', 0)
    .attr('y', (d, i) => {
        if (i !== line.stations.length - 1) {
            return scaleY(d.km) + d.offset + (scaleY(line.stations[i + 1].km) - scaleY(d.km)) / 2
        }
    })
    .attr('dy', 5)
    .attr('dx', 0)

// Create Left Line Stations
const leftLineStations = groupLeftLineStation.selectAll('text').data(line.stations)
leftLineStations.enter().append('text')
    .attr('text-anchor', 'end')
    .text((d, i) => {
        return d.stationId
    })
    .attr('x', 0)
    .attr('y', (d, i) => {
        return scaleY(d.km) + d.offset
    })
    .attr('dy', 5)
    .attr('dx', 0)
    .attr('font-weight', 800)

// Create Left Line Stations Altitude
const scaleAltitudeX = d3.scaleLinear()
    .domain([
        d3.min(line.stations, ls => ls.km),
        d3.max(line.stations, ls => ls.km)
    ])
    .range([0, height])

const scaleAltitudeY = d3.scaleLinear()
    .domain([
        d3.min(line.stations, ls => stationData.find(s => s.id == ls.stationId).altitude),
        d3.max(line.stations, ls => stationData.find(s => s.id == ls.stationId).altitude)
    ])
    .range([0, 50])

const altitudeLineGenerator = d3.area()
    .x(d => {
        return scaleAltitudeX(d.km) + d.offset
    })
    .y0(d => {
        return scaleAltitudeY(0)
    })
    .y1(d => {
        return scaleAltitudeY(stationData.find(s => s.id == d.stationId).altitude)
    })

const altitude = altitudeLineGenerator(line.stations)
groupLeftLineStationAltitude
    .append('path')
    .attr('d', altitude)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)

const altitudePath = d3.path()
line.stations.forEach((ls, i, arr) => {
    if (i == 0 && i == arr.length) {
        return
    }
    altitudePath.moveTo(scaleAltitudeX(ls.km) + ls.offset, scaleAltitudeY(0))
    altitudePath.lineTo(scaleAltitudeX(ls.km) + ls.offset, scaleAltitudeY(stationData.find(s => s.id == ls.stationId).altitude))
})
groupLeftLineStationAltitude
    .append('path')
    .attr('d', altitudePath)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)

groupLeftLineStationAltitude.selectAll('text').data(line.stations)
    .enter().append('text')
    .attr('x', d => {
        return scaleAltitudeX(d.km) + d.offset
    })
    .attr('y', d => {
        return 50
    })
    .attr('dx', -1)
    .attr('dy', 6)
    .attr('text-anchor', 'end')
    .attr('transform', (d, i, sel) => {
        const cx = d3.select(sel[i]).attr('x')
        const cy = d3.select(sel[i]).attr('y')
        return `rotate(-90, ${cx}, ${cy})`
    })
    .text(d => {
        return stationData.find(s => s.id == d.stationId).altitude
    })

// Create lines
const lines = group.selectAll('path').data(orerData)
lines.enter().append('path')
    .attr('d', generate)
    .attr('id', d => d.id)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 3)
    .attr('stroke-linecap', 'butt')
    .attr('stroke-linejoin', 'round')

// TrainId First
// Put trainId between first and second stations
const textTrainIdFirst = group.selectAll('text.trainIdFirst').data(orerData)
textTrainIdFirst.enter()
    .append('text')
    .attr('dx', 0)
    .attr('dy', -2)
    .append('textPath')
    .text(d => d.id)
    .attr('href', d => `#${d.id}`)
    .attr('startOffset', '1%')
    .attr('class', 'trainIdFirst')
    .call(d3.drag().on('start', function (e, d) {}).on('drag', function (e, d) {
        if (d.stations[1].km - d.stations[0].km > 0) {
            d3.select(this).attr('startOffset', e.y)
        } else {
            d3.select(this).attr('startOffset', height - e.y)
        }
    }))
/*
.attr('x', d => {
    const first = d.stations[0]
    const second = d.stations[1]

    const departure = first.departure.split(':')
    const firstX = scaleX(new Date(2000, 0, 1, +departure[0], +departure[1]))
    const arrival = second.arrival.split(':')
    const secondX = scaleX(new Date(2000, 0, 1, +arrival[0], +arrival[1]))
    return (firstX + secondX) / 2
})
.attr('y', d => {
    const first = d.stations[0]
    const second = d.stations[1]
    let firstY = 0
    let secondY = 0

    let lineStation = line.stations.find(s => s.stationId == first.stationId)
    if (lineStation) {
        firstY = scaleY(first.km) + lineStation.offset
    }

    lineStation = line.stations.find(s => s.stationId == second.stationId)
    if (lineStation) {
        secondY = scaleY(second.km) + lineStation.offset
    }

    return (firstY + secondY) / 2
})
*/

// TrainId Last
// put trainId before last station
const textTrainIdLast = group.selectAll('text.trainIdLast').data(orerData)
textTrainIdLast.enter()
    .append('text')
    .attr('dx', 0)
    .attr('dy', -2)
    .append('textPath')
    .text(d => d.id)
    .attr('href', d => `#${d.id}`)
    .attr('startOffset', '95%')
    .attr('class', 'trainIdLast')
    .call(d3.drag().on('start', function (e, d) {}).on('drag', function (e, d) {
        if (d.stations[1].km - d.stations[0].km > 0) {
            d3.select(this).attr('startOffset', e.y)
        } else {
            d3.select(this).attr('startOffset', height - e.y)
        }
    }))
/*
.attr('x', d => {
    const first = d.stations[d.stations.length - 2]
    const second = d.stations[d.stations.length - 1]

    const departure = first.departure.split(':')
    const firstX = scaleX(new Date(2000, 0, 1, +departure[0], +departure[1]))
    const arrival = second.arrival.split(':')
    const secondX = scaleX(new Date(2000, 0, 1, +arrival[0], +arrival[1]))
    return (firstX + secondX) / 2
})
.attr('y', d => {
    const first = d.stations[d.stations.length - 2]
    const second = d.stations[d.stations.length - 1]
    let firstY = 0
    let secondY = 0

    let lineStation = line.stations.find(s => s.stationId == first.stationId)
    if (lineStation) {
        firstY = scaleY(first.km) + lineStation.offset
    }

    lineStation = line.stations.find(s => s.stationId == second.stationId)
    if (lineStation) {
        secondY = scaleY(second.km) + lineStation.offset
    }

    return (firstY + secondY) / 2
})
*/

// Put circles around stations on path 
const circleGroup = group.selectAll('g.circles').data(orerData)
const circles = circleGroup.enter().append('g').attr('class', 'circles')
circles.selectAll('circle').data(d => d.stations)
    .enter().append('circle')
    .attr('cx', d => {
        let x = 0
        if (d.departure) {
            const departure = d.departure.split(':')
            x = scaleX(new Date(2000, 0, 1, +departure[0], +departure[1]))
        } else if (d.arrival) {
            const arrival = d.arrival.split(':')
            x = scaleX(new Date(2000, 0, 1, +arrival[0], +arrival[1]))
        }
        return x
    })
    .attr('cy', d => {
        let y = 0
        const lineStation = line.stations.find(s => s.stationId == d.stationId)
        if (lineStation) {
            y = scaleY(d.km) + lineStation.offset

        }
        return y
    })
    .attr('r', 4)
    .attr('fill', 'none')
    .attr('stroke-width', 1)
    .attr('stroke', 'red')

// Put minutes around stations on path 
const minutesGroup = group.selectAll('g.minutes').data(orerData)
const minutes = minutesGroup.enter().append('g').attr('class', 'minutes')
minutes.selectAll('text').data(d => d.stations)
    .enter().append('text')
    .text(d => {
        const departure = d.departure.split(':')
        return departure[1]
    })
    .attr('x', d => {
        const departure = d.departure.split(':')
        const x = scaleX(new Date(2000, 0, 1, +departure[0], +departure[1]))
        return x
    })
    .attr('y', d => {
        const lineStation = line.stations.find(s => s.stationId == d.stationId)
        if (lineStation) {
            const y = scaleY(d.km) + lineStation.offset
            return y
        } else {
            return 0
        }
    })
    .attr('dx', 5)
    .attr('dy', 4)
    .attr('text-anchor', 'start')
    .attr('font-size', 10)
    .attr('font-weight', 400)

function generate(d, i) {
    const path = d3.path()

    for (let i = 0; i < d.stations.length; i++) {

        if (d.stations[i].km === '') {
            throw 'Orer Km boş olamaz'
        }
        if (d.stations[i].departure === '' && d.stations[i].arrival === '') {
            throw 'Orer variş ve kalkış saatleri boş olamaz'
        }

        if (i == 0) {
            if (d.stations[i].arrival !== '') {
                let lineStation = line.stations.find(s => s.stationId == d.stations[i].stationId)
                if (lineStation) {
                    let arrival = d.stations[i].arrival.split(':')
                    let x = scaleX(new Date(2000, 0, 1, +arrival[0], +arrival[1]))
                    let y = scaleY(d.stations[i].km) + lineStation.offset
                    path.moveTo(x, y)
                }
            } else if (d.stations[i].departure !== '') {
                let lineStation = line.stations.find(s => s.stationId == d.stations[i].stationId)
                if (lineStation) {
                    let departure = d.stations[i].departure.split(':')
                    let x = scaleX(new Date(2000, 0, 1, +departure[0], +departure[1]))
                    let y = scaleY(d.stations[i].km) + lineStation.offset
                    path.moveTo(x, y)
                }
            }
        }

        if (d.stations[i].arrival !== '') {
            let lineStation = line.stations.find(s => s.stationId == d.stations[i].stationId)
            if (lineStation) {
                let arrival = d.stations[i].arrival.split(':')
                let x = scaleX(new Date(2000, 0, 1, +arrival[0], +arrival[1]))
                let y = scaleY(d.stations[i].km) + lineStation.offset
                path.lineTo(x, y)
            }
        }

        if (d.stations[i].departure !== '') {
            let lineStation = line.stations.find(s => s.stationId == d.stations[i].stationId)
            if (lineStation) {
                let departure = d.stations[i].departure.split(':')
                let x = scaleX(new Date(2000, 0, 1, +departure[0], +departure[1]))
                let y = scaleY(d.stations[i].km) + lineStation.offset
                path.lineTo(x, y)
            }
        }
    }
    return path
}