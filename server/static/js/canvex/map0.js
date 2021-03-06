var l = {
    sprites: [{
        y: -0.03125,
        a: 3.14159265358979,
        sprite: "player",
        sector: 3,
        x: 3.59375,
        z: -0.1
    }, {
        y: -1.60918809660903,
        a: 0,
        sprite: "barrel",
        sector: 0,
        x: -1.79641548873723,
        z: -0.1
    }, {
        y: -1.8404084954868,
        a: 0,
        sprite: "barrel",
        sector: 0,
        x: -1.59602447637649,
        z: -0.1
    }, {
        y: -1.8404084954868,
        a: 0,
        sprite: "barrel",
        sector: 0,
        x: -1.82724487525426,
        z: -0.1
    }, {
        y: -1.80957910896976,
        a: 0,
        sprite: "barrel",
        sector: 0,
        x: 1.88769620004855,
        z: -0.1
    }, {
        y: 1.87453257981601,
        a: 0,
        sprite: "barrel",
        sector: 0,
        x: -1.84265956851278,
        z: -0.1
    }, {
        y: -2.33367867975937,
        a: 0,
        sprite: "barrel",
        sector: 5,
        x: -2.38217383256091,
        z: -0.1
    }],
    sectors: [{
        floor_height: -0.1,
        ceiling: [99, 69, 63],
        edges: [{
            y1: -2,
            dest: 2,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: -2,
            x1: -2
        }, {
            y1: 2,
            dest: 5,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: 2,
            x1: -2
        }, {
            y1: 2,
            dest: 4,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: 2,
            x1: 2
        }, {
            y1: -2,
            dest: 3,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: -2,
            x1: 2
        }],
        floor: [37, 17, 129],
        ceiling_height: 1.05,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -0.75,
            dest: 24,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.25,
            x0: -4,
            x1: -4
        }, {
            y1: -0.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.25,
            x0: -4,
            x1: -4
        }, {
            y1: 0.25,
            dest: 23,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.75,
            x0: -4,
            x1: -4
        }, {
            y1: 0.75,
            dest: 8,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: -2.5,
            x1: -4
        }, {
            y1: 2,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: -2,
            x1: -2.5
        }, {
            y1: 2,
            dest: 1,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: -2,
            x1: -2
        }, {
            y1: -2,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: -2.5,
            x1: -2
        }, {
            y1: -2,
            dest: 6,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.75,
            x0: -4,
            x1: -2.5
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -4,
            dest: 6,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2.5,
            x0: -2,
            x1: -0.5
        }, {
            y1: -2.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: -2,
            x1: -2
        }, {
            y1: -2,
            dest: 1,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: 2,
            x1: -2
        }, {
            y1: -2,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2.5,
            x0: 2,
            x1: 2
        }, {
            y1: -2.5,
            dest: 7,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: 0.5,
            x1: 2
        }, {
            y1: -4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: 0.25,
            x1: 0.5
        }, {
            y1: -4,
            dest: 33,
            tex: {
                l: {
                    u: 0,
                    n: "door15_4",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 0.5,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: -0.25,
            x1: 0.25
        }, {
            y1: -4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: -0.5,
            x1: -0.25
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.9
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -2,
            dest: 1,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: 2,
            x1: 2
        }, {
            y1: 2,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: 2.5,
            x1: 2
        }, {
            y1: 2,
            dest: 26,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.5,
            x0: 4,
            x1: 2.5
        }, {
            y1: 0.5,
            dest: 10,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.5,
            x0: 4,
            x1: 4
        }, {
            y1: -0.5,
            dest: 7,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: 2.5,
            x1: 4
        }, {
            y1: -2,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: 2,
            x1: 2.5
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 2,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2.5,
            x0: -2,
            x1: -2
        }, {
            y1: 2.5,
            dest: 8,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: -0.5,
            x1: -2
        }, {
            y1: 4,
            dest: 14,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: 0.5,
            x1: -0.5
        }, {
            y1: 4,
            dest: 9,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2.5,
            x0: 2,
            x1: 0.5
        }, {
            y1: 2.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: 2,
            x1: 2
        }, {
            y1: 2,
            dest: 1,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: -2,
            x1: 2
        }],
        floor: [79, 27, 27],
        ceiling_height: 2,
        light: 0.6
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.75,
            x0: -4,
            x1: -4
        }, {
            y1: -0.75,
            dest: 2,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: -2.5,
            x1: -4
        }, {
            y1: -2,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2.5,
            x0: -2,
            x1: -2.5
        }, {
            y1: -2.5,
            dest: 3,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: -0.5,
            x1: -2
        }, {
            y1: -4,
            dest: 31,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: -1.75,
            x1: -0.5
        }, {
            y1: -4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: -4,
            x1: -1.75
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -4,
            dest: 3,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2.5,
            x0: 2,
            x1: 0.5
        }, {
            y1: -2.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -2,
            x0: 2.5,
            x1: 2
        }, {
            y1: -2,
            dest: 4,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.5,
            x0: 4,
            x1: 2.5
        }, {
            y1: -0.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: 4,
            x1: 4
        }, {
            y1: -4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: 1.75,
            x1: 4
        }, {
            y1: -4,
            dest: 32,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: 0.5,
            x1: 1.75
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 2,
            dest: 2,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.75,
            x0: -4,
            x1: -2.5
        }, {
            y1: 0.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: -4,
            x1: -4
        }, {
            y1: 4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: -0.5,
            x1: -4
        }, {
            y1: 4,
            dest: 5,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2.5,
            x0: -2,
            x1: -0.5
        }, {
            y1: 2.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: -2.5,
            x1: -2
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 2.5,
            dest: 5,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: 0.5,
            x1: 2
        }, {
            y1: 4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: 2.5,
            x1: 0.5
        }, {
            y1: 4,
            dest: 28,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 3.25,
            x0: 2.75,
            x1: 2.5
        }, {
            y1: 3.25,
            dest: 29,
            tex: {
                l: {
                    u: 0,
                    n: "crate_drtyow",
                    us: 0.353,
                    vs: 0.353,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 3,
            x0: 2.5,
            x1: 2.75
        }, {
            y1: 3,
            dest: 26,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2.5,
            x0: 2,
            x1: 2.5
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -0.5,
            dest: 4,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.5,
            x0: 4,
            x1: 4
        }, {
            y1: 0.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.5,
            x0: 5.25,
            x1: 4
        }, {
            y1: 0.5,
            dest: 11,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.5,
            x0: 5.25,
            x1: 5.25
        }, {
            y1: -0.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.5,
            x0: 4,
            x1: 5.25
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -0.5,
            dest: 10,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.5,
            x0: 5.25,
            x1: 5.25
        }, {
            y1: 0.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 1,
            x0: 5.75,
            x1: 5.25
        }, {
            y1: 1,
            dest: 12,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 1,
            x0: 6.25,
            x1: 5.75
        }, {
            y1: 1,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.5,
            x0: 6.75,
            x1: 6.25
        }, {
            y1: 0.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.5,
            x0: 6.75,
            x1: 6.75
        }, {
            y1: -0.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -1,
            x0: 6.25,
            x1: 6.75
        }, {
            y1: -1,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -1,
            x0: 5.75,
            x1: 6.25
        }, {
            y1: -1,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.5,
            x0: 5.25,
            x1: 5.75
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 1,
            dest: 11,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 1,
            x0: 5.75,
            x1: 6.25
        }, {
            y1: 1,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.25,
            x0: 5,
            x1: 5.75
        }, {
            y1: 4.25,
            dest: 13,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.5,
            x0: 6.25,
            x1: 5
        }, {
            y1: 5.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5,
            x0: 6.75,
            x1: 6.25
        }, {
            y1: 5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.25,
            x0: 7,
            x1: 6.75
        }, {
            y1: 4.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 1,
            x0: 6.25,
            x1: 7
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.5,
            dest: 12,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.25,
            x0: 5,
            x1: 6.25
        }, {
            y1: 4.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 3,
            x1: 5
        }, {
            y1: 4.5,
            dest: 15,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 3,
            x1: 3
        }, {
            y1: 5.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.5,
            x0: 6.25,
            x1: 3
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0.7,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.25,
            dest: 22,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 0.5,
            x1: -0.5
        }, {
            y1: 4.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: 0.5,
            x1: 0.5
        }, {
            y1: 4,
            dest: 5,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: -0.5,
            x1: 0.5
        }, {
            y1: 4,
            dest: 0,
            tex: {
                l: {
                    u: 0.5,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: -0.5,
            x1: -0.5
        }],
        floor: [32, 32, 32],
        ceiling_height: 1.6,
        light: 0.6
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.25,
            dest: 13,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 3,
            x1: 3
        }, {
            y1: 4.5,
            dest: 0,
            tex: {
                l: {
                    u: 0.25,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 2.25,
            x1: 3
        }, {
            y1: 4.5,
            dest: 16,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_1",
                    us: 1,
                    vs: 1,
                    v: 0.04
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 2.25,
            x1: 2.25
        }, {
            y1: 5.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 3,
            x1: 2.25
        }],
        floor: [56, 32, 32],
        ceiling_height: 1,
        light: 0.5
    }, {
        floor_height: 0.1,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.25,
            dest: 15,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 2.25,
            x1: 2.25
        }, {
            y1: 4.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 2,
            x1: 2.25
        }, {
            y1: 4.5,
            dest: 17,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_1",
                    us: 1,
                    vs: 1,
                    v: 0.14
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 2,
            x1: 2
        }, {
            y1: 5.25,
            dest: 0,
            tex: {
                l: {
                    u: 0.75,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 2.25,
            x1: 2
        }],
        floor: [32, 32, 32],
        ceiling_height: 1.1,
        light: 0.5
    }, {
        floor_height: 0.2,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.25,
            dest: 16,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 2,
            x1: 2
        }, {
            y1: 4.5,
            dest: 0,
            tex: {
                l: {
                    u: 0.75,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 1.75,
            x1: 2
        }, {
            y1: 4.5,
            dest: 18,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_1",
                    us: 1,
                    vs: 1,
                    v: 0.24
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 1.75,
            x1: 1.75
        }, {
            y1: 5.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 2,
            x1: 1.75
        }],
        floor: [32, 32, 32],
        ceiling_height: 1.1,
        light: 0.6
    }, {
        floor_height: 0.3,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.25,
            dest: 17,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 1.75,
            x1: 1.75
        }, {
            y1: 4.5,
            dest: 0,
            tex: {
                l: {
                    u: 0.5,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 1.5,
            x1: 1.75
        }, {
            y1: 4.5,
            dest: 19,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_1",
                    us: 1,
                    vs: 1,
                    v: 0.34
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 1.5,
            x1: 1.5
        }, {
            y1: 5.25,
            dest: 0,
            tex: {
                l: {
                    u: 0.25,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 1.75,
            x1: 1.5
        }],
        floor: [32, 32, 32],
        ceiling_height: 1.1,
        light: 0.6
    }, {
        floor_height: 0.4,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.25,
            dest: 18,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 1.5,
            x1: 1.5
        }, {
            y1: 4.5,
            dest: 0,
            tex: {
                l: {
                    u: 0.25,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 1.25,
            x1: 1.5
        }, {
            y1: 4.5,
            dest: 20,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_1",
                    us: 1,
                    vs: 1,
                    v: 0.44
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 1.25,
            x1: 1.25
        }, {
            y1: 5.25,
            dest: 0,
            tex: {
                l: {
                    u: 0.5,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 1.5,
            x1: 1.25
        }],
        floor: [32, 32, 32],
        ceiling_height: 1.2,
        light: 0.7
    }, {
        floor_height: 0.5,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.25,
            dest: 19,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 1.25,
            x1: 1.25
        }, {
            y1: 4.5,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 1,
            x1: 1.25
        }, {
            y1: 4.5,
            dest: 21,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_1",
                    us: 1,
                    vs: 1,
                    v: 0.54
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 1,
            x1: 1
        }, {
            y1: 5.25,
            dest: 0,
            tex: {
                l: {
                    u: 0.75,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 1.25,
            x1: 1
        }],
        floor: [32, 32, 32],
        ceiling_height: 1.3,
        light: 0.8
    }, {
        floor_height: 0.6,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.25,
            dest: 20,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 1,
            x1: 1
        }, {
            y1: 4.5,
            dest: 0,
            tex: {
                l: {
                    u: 0.75,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 0.75,
            x1: 1
        }, {
            y1: 4.5,
            dest: 22,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_1",
                    us: 1,
                    vs: 1,
                    v: 0.64
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 0.75,
            x1: 0.75
        }, {
            y1: 5.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 1,
            x1: 0.75
        }],
        floor: [32, 32, 32],
        ceiling_height: 1.4,
        light: 0.9
    }, {
        floor_height: 0.7,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 5.25,
            dest: 21,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 0.75,
            x1: 0.75
        }, {
            y1: 4.5,
            dest: 0,
            tex: {
                l: {
                    u: 0.5,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4.5,
            x0: 0.5,
            x1: 0.75
        }, {
            y1: 4.5,
            dest: 14,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: -0.5,
            x1: 0.5
        }, {
            y1: 5.25,
            dest: 0,
            tex: {
                l: {
                    u: 0.25,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 5.25,
            x0: 0.75,
            x1: -0.5
        }],
        floor: [32, 32, 32],
        ceiling_height: 1.6,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 0.75,
            dest: 2,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.25,
            x0: -4,
            x1: -4
        }, {
            y1: 0.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.75,
            x0: -4.5,
            x1: -4
        }, {
            y1: -0.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -1,
            x0: -5,
            x1: -4.5
        }, {
            y1: -1,
            dest: 25,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.25,
            x0: -5,
            x1: -5
        }, {
            y1: -0.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall14_5",
                    us: 0.5,
                    vs: 0.5,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.75,
            x0: -4.5,
            x1: -5
        }, {
            y1: 0.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall14_5",
                    us: 0.5,
                    vs: 0.5,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.75,
            x0: -4,
            x1: -4.5
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -0.25,
            dest: 2,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.75,
            x0: -4,
            x1: -4
        }, {
            y1: -0.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall14_5",
                    us: 0.5,
                    vs: 0.5,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.75,
            x0: -4.5,
            x1: -4
        }, {
            y1: -0.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall14_5",
                    us: 0.5,
                    vs: 0.5,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.25,
            x0: -5,
            x1: -4.5
        }, {
            y1: 0.25,
            dest: 30,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 1,
            x0: -5,
            x1: -5
        }, {
            y1: 1,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.75,
            x0: -4.5,
            x1: -5
        }, {
            y1: 0.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.25,
            x0: -4,
            x1: -4.5
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.7
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -0.25,
            dest: 23,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -1,
            x0: -5,
            x1: -5
        }, {
            y1: -1,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.75,
            x0: -5.75,
            x1: -5
        }, {
            y1: -0.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0,
            x0: -6.25,
            x1: -5.75
        }, {
            y1: 0,
            dest: 30,
            tex: {
                l: {
                    u: 0,
                    n: "wall14_5",
                    us: 0.5,
                    vs: 0.5,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0,
            x0: -5.25,
            x1: -6.25
        }, {
            y1: 0,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall14_5",
                    us: 0.5,
                    vs: 0.5,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -0.25,
            x0: -5,
            x1: -5.25
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.9
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 2.5,
            dest: 9,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 3,
            x0: 2.5,
            x1: 2
        }, {
            y1: 3,
            dest: 29,
            tex: {
                l: {
                    u: 0,
                    n: "crate_drtyow_sign",
                    us: 0.353,
                    vs: 0.353,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2.75,
            x0: 2.75,
            x1: 2.5
        }, {
            y1: 2.75,
            dest: 27,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.5,
            x0: 4,
            x1: 2.75
        }, {
            y1: 0.5,
            dest: 4,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2,
            x0: 2.5,
            x1: 4
        }, {
            y1: 2,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2.5,
            x0: 2,
            x1: 2.5
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 0.5,
            dest: 26,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2.75,
            x0: 2.75,
            x1: 4
        }, {
            y1: 2.75,
            dest: 29,
            tex: {
                l: {
                    u: 0,
                    n: "crate_drtyow",
                    us: 0.353,
                    vs: 0.353,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 3,
            x0: 3,
            x1: 2.75
        }, {
            y1: 3,
            dest: 28,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: 4,
            x1: 3
        }, {
            y1: 4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.5,
            x0: 4,
            x1: 4
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 3.25,
            dest: 9,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: 2.5,
            x1: 2.75
        }, {
            y1: 4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 4,
            x0: 4,
            x1: 2.5
        }, {
            y1: 4,
            dest: 27,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 3,
            x0: 3,
            x1: 4
        }, {
            y1: 3,
            dest: 29,
            tex: {
                l: {
                    u: 0,
                    n: "crate_drtyow_sign",
                    us: 0.353,
                    vs: 0.353,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 3.25,
            x0: 2.75,
            x1: 3
        }],
        floor: [69, 27, 27],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0.353,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 3,
            dest: 9,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 3.25,
            x0: 2.75,
            x1: 2.5
        }, {
            y1: 3.25,
            dest: 28,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 3,
            x0: 3,
            x1: 2.75
        }, {
            y1: 3,
            dest: 27,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 2.75,
            x0: 2.75,
            x1: 3
        }, {
            y1: 2.75,
            dest: 26,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 3,
            x0: 2.5,
            x1: 2.75
        }],
        floor: [108, 79, 46],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: 0,
            dest: 25,
            tex: {
                l: {
                    u: 0,
                    n: "wall14_5",
                    us: 0.5,
                    vs: 0.5,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0,
            x0: -6.25,
            x1: -5.25
        }, {
            y1: 0,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.75,
            x0: -5.75,
            x1: -6.25
        }, {
            y1: 0.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 1,
            x0: -5,
            x1: -5.75
        }, {
            y1: 1,
            dest: 24,
            tex: {
                l: {
                    u: 0,
                    n: "wall14_5",
                    us: 0.5,
                    vs: 0.5,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0.25,
            x0: -5,
            x1: -5
        }, {
            y1: 0.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall14_5",
                    us: 0.5,
                    vs: 0.5,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: 0,
            x0: -5.25,
            x1: -5
        }],
        floor: [79, 27, 27],
        ceiling_height: 1,
        light: 0.8
    }, {
        floor_height: 0.4,
        ceiling: [119, 109, 99],
        edges: [{
            y1: -4,
            dest: 6,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: -0.5,
            x1: -1.75
        }, {
            y1: -4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: -0.5,
            x1: -0.5
        }, {
            y1: -4.25,
            dest: 34,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: -1.75,
            x1: -0.5
        }, {
            y1: -4.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: -1.75,
            x1: -1.75
        }],
        floor: [119, 109, 99],
        ceiling_height: 0.7,
        light: 1
    }, {
        floor_height: 0.4,
        ceiling: [119, 109, 99],
        edges: [{
            y1: -4,
            dest: 7,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: 1.75,
            x1: 0.5
        }, {
            y1: -4,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: 1.75,
            x1: 1.75
        }, {
            y1: -4.25,
            dest: 34,
            tex: {
                l: {
                    u: 0,
                    n: "tp2_1",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: 0.5,
            x1: 1.75
        }, {
            y1: -4.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: 0.5,
            x1: 0.5
        }],
        floor: [119, 109, 99],
        ceiling_height: 0.7,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -4,
            dest: 3,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: 0.25,
            x1: -0.25
        }, {
            y1: -4,
            dest: 0,
            tex: {
                l: {
                    u: 0.16,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.1875,
            x0: 0.25,
            x1: 0.25
        }, {
            y1: -4.1875,
            dest: 37,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.1875,
            x0: -0.25,
            x1: 0.25
        }, {
            y1: -4.1875,
            dest: 0,
            tex: {
                l: {
                    u: -0.12,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4,
            x0: -0.25,
            x1: -0.25
        }],
        floor: [110, 90, 80],
        ceiling_height: 0,
        light: 1,
        tags: [{
            top: 1,
            type: "vertical door",
            bottom: 0
        }]
    }, {
        floor_height: 0,
        ceiling: [160, 195, 246],
        edges: [{
            y1: -4.25,
            dest: 37,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0.86,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                }
            },
            y0: -4.25,
            x0: 0.25,
            x1: -0.25
        }, {
            y1: -4.25,
            dest: 0,
            tex: {
                l: {
                    u: 0.74,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: 0.5,
            x1: 0.25
        }, {
            y1: -4.25,
            dest: 32,
            tex: {
                l: {
                    u: 0.12,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0.12,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                }
            },
            y0: -4.25,
            x0: 1.75,
            x1: 0.5
        }, {
            y1: -4.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: 4,
            x1: 1.75
        }, {
            y1: -4.25,
            dest: 0,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -10.75,
            x0: 4,
            x1: 4
        }, {
            y1: -10.75,
            dest: 0,
            tex: {
                l: {
                    u: 0.22,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -10.75,
            x0: 2.25,
            x1: 4
        }, {
            y1: -10.75,
            dest: 36,
            tex: {
                l: {
                    u: 0.22,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0.22,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                }
            },
            y0: -10.75,
            x0: 0.25,
            x1: 2.25
        }, {
            y1: -10.75,
            dest: 0,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -10.75,
            x0: 0,
            x1: 0.25
        }, {
            y1: -10.75,
            dest: 35,
            tex: {
                l: {
                    u: 0.1,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0.1,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                }
            },
            y0: -10.75,
            x0: -2,
            x1: 0
        }, {
            y1: -10.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -10.75,
            x0: -4,
            x1: -2
        }, {
            y1: -10.75,
            dest: 0,
            tex: {
                l: {
                    u: -0.25,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: -4,
            x1: -4
        }, {
            y1: -4.25,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: -1.75,
            x1: -4
        }, {
            y1: -4.25,
            dest: 31,
            tex: {
                l: {
                    u: 0.24,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0.24,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 2,
                    vs: 2,
                    v: 0
                }
            },
            y0: -4.25,
            x0: -0.5,
            x1: -1.75
        }, {
            y1: -4.25,
            dest: 0,
            tex: {
                l: {
                    u: 0.11,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: -0.25,
            x1: -0.5
        }],
        floor: [130, 100, 70],
        ceiling_height: 4,
        light: 1
    }, {
        floor_height: 2,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -10.75,
            dest: 34,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -10.75,
            x0: 0,
            x1: -2
        }, {
            y1: -10.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -11,
            x0: 0,
            x1: 0
        }, {
            y1: -11,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "firefox",
                    us: 2,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -11,
            x0: -2,
            x1: 0
        }, {
            y1: -11,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -10.75,
            x0: -2,
            x1: -2
        }],
        floor: [79, 27, 27],
        ceiling_height: 3,
        light: 1
    }, {
        floor_height: 2,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -10.75,
            dest: 34,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -10.75,
            x0: 2.25,
            x1: 0.25
        }, {
            y1: -10.75,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -11,
            x0: 2.25,
            x1: 2.25
        }, {
            y1: -11,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "opera",
                    us: 2,
                    vs: 1,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -11,
            x0: 0.25,
            x1: 2.25
        }, {
            y1: -11,
            dest: 0,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -10.75,
            x0: 0.25,
            x1: 0.25
        }],
        floor: [79, 27, 27],
        ceiling_height: 3,
        light: 1
    }, {
        floor_height: 0,
        ceiling: [79, 59, 43],
        edges: [{
            y1: -4.1875,
            dest: 33,
            tex: {
                l: {
                    u: 0,
                    n: "door15_4",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 0.5,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.1875,
            x0: 0.25,
            x1: -0.25
        }, {
            y1: -4.1875,
            dest: 0,
            tex: {
                l: {
                    u: 0.125,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: 0.25,
            x1: 0.25
        }, {
            y1: -4.25,
            dest: 34,
            tex: {
                l: {
                    u: 0,
                    n: "wall52_2",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.25,
            x0: -0.25,
            x1: 0.25
        }, {
            y1: -4.25,
            dest: 0,
            tex: {
                l: {
                    u: -0.03,
                    n: "2_conc_celing01",
                    us: 2,
                    vs: 2,
                    v: 0
                },
                u: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                },
                m: {
                    u: 0,
                    n: "",
                    us: 1,
                    vs: 1,
                    v: 0
                }
            },
            y0: -4.1875,
            x0: -0.25,
            x1: -0.25
        }],
        floor: [130, 100, 70],
        ceiling_height: 1,
        light: 1
    }]
};

var Level = require('./level');

var level = new Level();
level.load(l);
module.exports = level;
