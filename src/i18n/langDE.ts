/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/**
 * Language: German.
 */

export default {
    time: {
        month: [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
            'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ],
        monthAbbr: [
            'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun',
            'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'
        ],
        dayOfWeek: [
            'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
        ],
        dayOfWeekAbbr: [
            'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
        ]
    },
    legend: {
        selector: {
            all: 'Alle',
            inverse: 'Invertiert'
        }
    },
    toolbox: {
        brush: {
            title: {
                rect: 'Box Auswahl',
                polygon: 'Lasso Auswahl',
                lineX: 'Horizontale Auswahl',
                lineY: 'Vertikale Auswahl',
                keep: 'Bereich Auswahl',
                clear: 'Auswahl zurücksetzen'
            }
        },
        dataView: {
            title: 'Daten Ansicht',
            lang: ['Daten Ansicht', 'Schließen', 'Aktualisieren']
        },
        dataZoom: {
            title: {
                zoom: 'Zoom',
                back: 'Zoom zurücksetzen'
            }
        },
        magicType: {
            title: {
                line: 'Zu Liniendiagramm wechseln',
                bar: 'Zu Balkendiagramm wechseln',
                stack: 'Stapel',
                tiled: 'Kachel'
            }
        },
        restore: {
            title: 'Wiederherstellen'
        },
        saveAsImage: {
            title: 'Als Bild speichern',
            lang: ['Rechtsklick zum Speichern des Bildes']
        }
    },
    series: {
        typeNames: {
            pie: 'Torten-Diagramm',
            bar: 'Balken-Diagramm',
            line: 'Linien-Diagramm',
            scatter: 'Streudiagramm',
            effectScatter: 'Streudiagramm (mit Effektstärke)',
            radar: 'Radar-Diagramm',
            tree: 'Baum',
            treemap: 'Treemap',
            boxplot: 'Boxplot',
            candlestick: 'Candlestick-Diagramm',
            k: 'K Liniend-Diagramm',
            heatmap: 'Heatmap',
            map: 'Karte',
            parallel: 'Parallele Koordinatenkarte',
            lines: 'Linien-Diagramm',
            graph: 'Netzwerk-Graph',
            sankey: 'Sankey-Diagramm',
            funnel: 'Trichter-Diagramm',
            gauge: 'Messinstrument',
            pictorialBar: 'Bildlicher Balken',
            themeRiver: 'Thematische Flusskarte',
            sunburst: 'Sunburst-Diagramm'
        }
    },
    aria: {
        general: {
            withTitle: 'Dies ist ein Diagramm über "{title}"',
            withoutTitle: 'Dies ist ein Diagramm'
        },
        series: {
            single: {
                prefix: '',
                withName: ' mit Typ {seriesType} namens {seriesName}.',
                withoutName: ' mit Typ {seriesType}.'
            },
            multiple: {
                prefix: '. Es besteht aus {seriesCount} Datenpunkten.',
                withName: ' Die Serie {seriesId} ist ein {seriesType} welcher {seriesName} darstellt.',
                withoutName: ' Die {seriesId}-Reihe ist ein {seriesType}.',
                separator: {
                    middle: '',
                    end: ''
                }
            }
        },
        data: {
            allData: 'Die Daten sind wie folgt: ',
            partialData: 'Die ersten {displayCnt} Elemente sind: ',
            withName: 'die Daten für {name} sind {value}',
            withoutName: '{value}',
            separator: {
                middle: ',',
                end: '.'
            }
        }
    }
};
