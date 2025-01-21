import { Box, useTheme } from "@mui/material"
import { ResponsiveLine } from '@nivo/line'


const data = [
    {
      "id": "france",
      "color": "hsl(45, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 79
        },
        {
          "x": "helicopter",
          "y": 159
        },
        {
          "x": "boat",
          "y": 37
        },
        {
          "x": "train",
          "y": 148
        },
        {
          "x": "subway",
          "y": 120
        },
        {
          "x": "bus",
          "y": 77
        },
        {
          "x": "car",
          "y": 120
        },
        {
          "x": "moto",
          "y": 106
        },
        {
          "x": "bicycle",
          "y": 68
        },
        {
          "x": "horse",
          "y": 77
        },
        {
          "x": "skateboard",
          "y": 82
        },
        {
          "x": "others",
          "y": 24
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(64, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 244
        },
        {
          "x": "helicopter",
          "y": 183
        },
        {
          "x": "boat",
          "y": 128
        },
        {
          "x": "train",
          "y": 248
        },
        {
          "x": "subway",
          "y": 85
        },
        {
          "x": "bus",
          "y": 260
        },
        {
          "x": "car",
          "y": 254
        },
        {
          "x": "moto",
          "y": 164
        },
        {
          "x": "bicycle",
          "y": 67
        },
        {
          "x": "horse",
          "y": 225
        },
        {
          "x": "skateboard",
          "y": 82
        },
        {
          "x": "others",
          "y": 250
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(127, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 225
        },
        {
          "x": "helicopter",
          "y": 134
        },
        {
          "x": "boat",
          "y": 240
        },
        {
          "x": "train",
          "y": 264
        },
        {
          "x": "subway",
          "y": 187
        },
        {
          "x": "bus",
          "y": 284
        },
        {
          "x": "car",
          "y": 198
        },
        {
          "x": "moto",
          "y": 32
        },
        {
          "x": "bicycle",
          "y": 191
        },
        {
          "x": "horse",
          "y": 75
        },
        {
          "x": "skateboard",
          "y": 279
        },
        {
          "x": "others",
          "y": 189
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(55, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 154
        },
        {
          "x": "helicopter",
          "y": 276
        },
        {
          "x": "boat",
          "y": 9
        },
        {
          "x": "train",
          "y": 248
        },
        {
          "x": "subway",
          "y": 76
        },
        {
          "x": "bus",
          "y": 288
        },
        {
          "x": "car",
          "y": 203
        },
        {
          "x": "moto",
          "y": 196
        },
        {
          "x": "bicycle",
          "y": 42
        },
        {
          "x": "horse",
          "y": 166
        },
        {
          "x": "skateboard",
          "y": 132
        },
        {
          "x": "others",
          "y": 8
        }
      ]
    }
  ]

const Line = (isDashboard = false) => {

    const theme = useTheme();


  return (
    <Box sx={{height: isDashboard? "280px" : "75vh"}}>
       <ResponsiveLine
        data={data}
        curve="catmullRom"
        theme={{
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.secondary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            grid: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 0,
              },
            },
            legends: {
              title: {
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              ticks: {
                line: {},
                text: {
                  fontSize: 10,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            annotations: {
              text: {
                fontSize: 13,
                fill: theme.palette.text.primary,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              link: {
                stroke: "#000000",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              outline: {
                stroke: "#000000",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              symbol: {
                fill: "#000000",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
            },
            tooltip: {
              wrapper: {},
              container: {
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                fontSize: 12,
              },
              basic: {},
              chip: {},
              table: {},
              tableCell: {},
              tableCellValue: {},
            },
          }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard? null :  'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard? null : 'Count',
            legendOffset: -45,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
  )
}

export default Line
