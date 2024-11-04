export const mockPool = [
    {
        "address": "0x310B7Ea7475A0B449Cfd73bE81522F1B88eFAFaa",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvUSDT-1",
        "name": "USDT",
        "category": "Volatile",
        "version": "3.0.2",
        "description": "Multi strategy USDT vault. \u003cbr/\u003e\u003cbr/\u003eMulti strategy vaults are (wait for it) vaults that contain multiple strategies. Multi strategy vaults give the vault creator flexibility to balance risk and opportunity across multiple different strategies.",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "name": "Tether USD",
            "symbol": "USDT",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "6377536680619",
            "tvl": 6377536.680619,
            "price": 1
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.052651890563698865,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.08211693577540002,
                "monthAgo": 0.052651890563698865,
                "inception": 0.009304999999999897
            },
            "pricePerShare": {
                "today": 1.009305,
                "weekAgo": 1.007718,
                "monthAgo": 1.004956
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.04106491700853221,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.049420436320846584,
                    "v3OracleStratRatioAPR": 0.04106491700853221
                }
            }
        },
        "strategies": [
            {
                "address": "0xe5baF8b6Be442811211e9339d9fbC1B8fb7D66dF",
                "name": "Aave V3 USDT Lender",
                "details": {
                    "totalDebt": "2527417786529",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1730175923,
                    "debtRatio": 3963
                }
            },
            {
                "address": "0x206db0A0Af10Bec57784045e089A418771D20227",
                "name": "USDT CompoundV3 Lender",
                "details": {
                    "totalDebt": "3792087360426",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730248295,
                    "debtRatio": 5946
                }
            },
            {
                "address": "0xED48069a2b9982B4eec646CBfA7b81d181f9400B",
                "name": "Spark USDT Lender",
                "details": {
                    "totalDebt": "58031533664",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1730176955,
                    "debtRatio": 91
                }
            },
            {
                "address": "0x95d69641ED7eCAa5e7d5539F56Dc6194b5Bcd7fA",
                "name": "Aave V3 USDT Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1728444143
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x310B7Ea7475A0B449Cfd73bE81522F1B88eFAFaa",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 3.3578936337392697e+23,
        "pricePerShare": "1009297",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x028eC7330ff87667b6dfb0D94b954c820195336c",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvDAI-1",
        "name": "DAI",
        "category": "Stablecoin",
        "version": "3.0.2",
        "description": "Multi strategy DAI vault. \u003cbr/\u003e\u003cbr/\u003eMulti strategy vaults are (wait for it) vaults that contain multiple strategies. Multi strategy vaults give the vault creator flexibility to balance risk and opportunity across multiple different strategies.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "name": "Dai Stablecoin",
            "symbol": "DAI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "4831363846163498344994532",
            "tvl": 4836195.2100096615,
            "price": 1.001
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.056946572155050994,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.061924344065573254,
                "monthAgo": 0.056946572155050994,
                "inception": 0.038161668264729
            },
            "pricePerShare": {
                "today": 1.038161668264729,
                "weekAgo": 1.0369302201385182,
                "monthAgo": 1.0333251483916457
            },
            "extra": {
                "stakingRewardsAPR": 0.00015349121237195895,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.04904675955327131,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.050833779736853435,
                    "v3OracleStratRatioAPR": 0.04904675955327131
                }
            }
        },
        "strategies": [
            {
                "address": "0x6acEDA98725505737c0F00a3dA0d047304052948",
                "name": "DAI to yvUSDS Depositor",
                "details": {
                    "totalDebt": "4707197795317096437528173",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730493863,
                    "debtRatio": 9743
                }
            },
            {
                "address": "0xEed00e00236cD7F36F2558D8b5fD05046449599D",
                "name": "Aave V3 DAI Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1726795151
                }
            },
            {
                "address": "0xF0825750791A4444c5E70743270DcfA8Bb38f959",
                "name": "Aave V3 DAI Lender",
                "details": {
                    "totalDebt": "124166050846401907466359",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1730493863,
                    "debtRatio": 257
                }
            },
            {
                "address": "0x1fd862499e9b9402DE6c599b6C391f83981180Ab",
                "name": "Spark DAI Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1730162039
                }
            },
            {
                "address": "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
                "name": "Savings Dai",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1728134039
                }
            }
        ],
        "staking": {
            "address": "0x128e72DfD8b00cbF9d12cB75E846AC87B83DdFc9",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731542400,
                    "apr": 0.00015349121237195895,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0x028eC7330ff87667b6dfb0D94b954c820195336c",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 2.754047394827272e+23,
        "pricePerShare": "1038152796834251450",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xBe53A109B494E5c9f97b9Cd39Fe969BE68BF6204",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvUSDC-1",
        "name": "USDC",
        "category": "Stablecoin",
        "version": "3.0.2",
        "description": "Multi strategy USDC vault. \u003cbr/\u003e\u003cbr/\u003eMulti strategy vaults are (wait for it) vaults that contain multiple strategies. Multi strategy vaults give the vault creator flexibility to balance risk and opportunity across multiple different strategies.",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "name": "USD Coin",
            "symbol": "USDC",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "4160022313685",
            "tvl": 4164182.3359986846,
            "price": 1.001
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.04668759641263595,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.0637686778953341,
                "monthAgo": 0.04668759641263595,
                "inception": 0.02990899999999996
            },
            "pricePerShare": {
                "today": 1.029909,
                "weekAgo": 1.028651,
                "monthAgo": 1.025972
            },
            "extra": {
                "stakingRewardsAPR": 0.0475708578398355,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.042853581120226414,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.040952013666742504,
                    "v3OracleStratRatioAPR": 0.042853581120226414
                }
            }
        },
        "strategies": [
            {
                "address": "0x25f893276544d86a82b1ce407182836F45cb6673",
                "name": "Spark USDC Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1730420771
                }
            },
            {
                "address": "0x602DA189F5aDa033E9aC7096Fc39C7F44a77e942",
                "name": "USDC to yvUSDS Depositor",
                "details": {
                    "totalDebt": "2072956756535",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730494871,
                    "debtRatio": 4983
                }
            },
            {
                "address": "0xbDb97eC319c41c6FA383E94eCE6Bdf383dFC7BE4",
                "name": "Aave V3 USDC Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1728444143
                }
            },
            {
                "address": "0xf766c7293f4e0265dDfA8369F78a808dF8AC70c1",
                "name": "Aave V3 USDC Lender",
                "details": {
                    "totalDebt": "1607414984383",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1730174927,
                    "debtRatio": 3864
                }
            },
            {
                "address": "0xfB7C06DDd70C74ac2F68D0F947Be3b4C503e3D6c",
                "name": "sUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 0
                }
            },
            {
                "address": "0x459F99D7c83Bc3653b1913B62D2978b1deDa01B5",
                "name": "sUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730237279
                }
            },
            {
                "address": "0x7eE351aA702C8fC735D77Fb229b7676AC15D7c79",
                "name": "Compound V3 USD Lender",
                "details": {
                    "totalDebt": "479650572767",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1729754507,
                    "debtRatio": 1153
                }
            }
        ],
        "staking": {
            "address": "0x622fA41799406B120f9a40dA843D358b7b2CFEE3",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731542400,
                    "apr": 0.0475708578398355,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0xBe53A109B494E5c9f97b9Cd39Fe969BE68BF6204",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 1.944156642917342e+23,
        "pricePerShare": "1029902",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xBF319dDC2Edc1Eb6FDf9910E39b37Be221C8805F",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvcrvUSD-2",
        "name": "crvUSD-2",
        "category": "Curve",
        "version": "3.0.2",
        "description": "Multi strategy crvUSD vault. \u003cbr/\u003e\u003cbr/\u003eVaults labeled with the category of -2 will use strategies deploying into less proven but potentially higher yielding protocols than the standard vaults. These strategies may have a higher likelyhood of becoming temporarily illiquid or even producing losses, but are expected to earn more yield than others.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
            "name": "Curve.Fi USD Stablecoin",
            "symbol": "crvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1010966557211016372568613",
            "tvl": 1008581.6871025556,
            "price": 0.997641
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.09770005987230138,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.13904517035745373,
                "monthAgo": 0.09770005987230138,
                "inception": 0.03130965124628915
            },
            "pricePerShare": {
                "today": 1.0313096512462891,
                "weekAgo": 1.0285668546033946,
                "monthAgo": 1.0230940607539067
            },
            "extra": {
                "stakingRewardsAPR": 0.06267604443361119,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.07019372912747568,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.1060163233086866,
                    "v3OracleStratRatioAPR": 0.07019372912747568
                }
            }
        },
        "strategies": [
            {
                "address": "0xb0154f71912866Bb69fE26fFc44779D99B9CAE85",
                "name": "Aave V3 crvUSD Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1730174927
                }
            },
            {
                "address": "0x27ffA71dBB25A7C52A3Da74C6eED8C94c9A43E0d",
                "name": "Aave V3 crvUSD Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1728444143
                }
            },
            {
                "address": "0x05329AAb081B125eEF7FbbC8b857428D478E692B",
                "name": "Sturdy crvUSD Compounder",
                "details": {
                    "totalDebt": "518621865086077236697684",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730174927,
                    "debtRatio": 5130
                }
            },
            {
                "address": "0xbf2e5BeD692C09aF8B39677e315F36aDF39bD685",
                "name": "Gearbox crvUSD Lender ",
                "details": {
                    "totalDebt": "492344692124939135870929",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730248295,
                    "debtRatio": 4870
                }
            }
        ],
        "staking": {
            "address": "0x71c3223D6f836f84cAA7ab5a68AAb6ECe21A9f3b",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731542400,
                    "apr": 0.06267604443361119,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0xBF319dDC2Edc1Eb6FDf9910E39b37Be221C8805F",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 9.853849121602642e+22,
        "pricePerShare": "1031291733019091036",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x082a5743aAdf3d0Daf750EeF24652b36a68B1e9C",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "ysyvAjnaDAI",
        "name": "yvYearn-Ajna DAI Harvester",
        "category": "Ajna",
        "version": "3.0.1",
        "description": "Supplies the juiced Yearn vault token to the corresponding staking contract to auto sell and compound any rewards. \u003cbr/\u003e\u003cbr/\u003eVisit [https://juiced.yearn.fi/](https://juiced.yearn.fi/) to learn more.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xe24BA27551aBE96Ca401D39761cA2319Ea14e3CB",
            "name": "Yearn-Ajna DAI Vault",
            "symbol": "yvAjnaDAI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1474615421710726559042117",
            "tvl": 1529068.5453882385,
            "price": 1.036927
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.04644810914063983,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0.19906332488845643,
                "monthAgo": 0.04644810914063983,
                "inception": 0.09770318735105432
            },
            "pricePerShare": {
                "today": 1.0977031873510543,
                "weekAgo": 1.0935284752988015,
                "monthAgo": 1.0935284752988015
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.35301729673762594,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.35301729673762594,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x082a5743aAdf3d0Daf750EeF24652b36a68B1e9C",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 7.102234267971228e+22,
        "pricePerShare": "1097645981354208396",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xAc37729B76db6438CE62042AE1270ee574CA7571",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvWETH-2",
        "name": "WETH-2",
        "category": "Volatile",
        "version": "3.0.2",
        "description": "Multi strategy WETH vault. \u003cbr/\u003e\u003cbr/\u003eVaults labeled with the category of -2 will use strategies deploying into less proven but potentially higher yielding protocols than the standard vaults. These strategies may have a higher likelyhood of becoming temporarily illiquid or even producing losses, but are expected to earn more yield than others.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "651560058942193792543",
            "tvl": 1598133.4813722342,
            "price": 2452.78
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.031210308088349698,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.07314747382441475,
                "monthAgo": 0.031210308088349698,
                "inception": 0.022092241908277854
            },
            "pricePerShare": {
                "today": 1.0220922419082779,
                "weekAgo": 1.0206604306071267,
                "monthAgo": 1.0194770479830817
            },
            "extra": {
                "stakingRewardsAPR": 0.0261418989071025,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.059460641981740725,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.059460641981740725,
                    "v3OracleStratRatioAPR": 3.070605294396554
                }
            }
        },
        "strategies": [
            {
                "address": "0x9861708f2ad2BD1ed8D4D12436C0d8EB1ED36f1c",
                "name": "Across WETH Lender",
                "details": {
                    "totalDebt": "77916402032941069928",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730402927,
                    "debtRatio": 1196
                }
            },
            {
                "address": "0x43CCaD774B20de2cf920531529a7b7cc5a23F887",
                "name": "WETH-Ajna Router",
                "details": {
                    "totalDebt": "539291347439410759469",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730174927,
                    "debtRatio": 8277
                }
            },
            {
                "address": "0x5f76526390d9cd9944d65C605C5006480FA1bFcB",
                "name": "Sturdy Swell Aggregator Compounder",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1724548115
                }
            },
            {
                "address": "0xD8b27CF359b7D15710a5BE299AF6e7Bf904984C2",
                "name": "EVK Vault eWETH-2",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1726503947
                }
            },
            {
                "address": "0xe92ade9eE76681f96C8BB0b352d5410ca5b35D70",
                "name": "StrategyGearboxLenderWETH",
                "details": {
                    "totalDebt": "19677645087125574277",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730174927,
                    "debtRatio": 302
                }
            },
            {
                "address": "0xc56413869c6CDf96496f2b1eF801fEDBdFA7dDB0",
                "name": "WETH-1 yVault",
                "details": {
                    "totalDebt": "14674664382716388869",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730271359,
                    "debtRatio": 225
                }
            }
        ],
        "staking": {
            "address": "0x8E2485942B399EA41f3C910c1Bb8567128f79859",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731542400,
                    "apr": 0.0261418989071025,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0xAc37729B76db6438CE62042AE1270ee574CA7571",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 4.98782383199343e+22,
        "pricePerShare": "1022082089280992476",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x92545bCE636E6eE91D88D2D017182cD0bd2fC22e",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvDAI-2",
        "name": "DAI-2",
        "category": "Stablecoin",
        "version": "3.0.2",
        "description": "Multi strategy DAI vault. \u003cbr/\u003e\u003cbr/\u003eVaults labeled with the category of -2 will use strategies deploying into less proven but potentially higher yielding protocols than the standard vaults. These strategies may have a higher likelyhood of becoming temporarily illiquid or even producing losses, but are expected to earn more yield than others.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "name": "Dai Stablecoin",
            "symbol": "DAI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "977296049438606067706719",
            "tvl": 978273.3454880447,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.04941484903398653,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.07593211930897409,
                "monthAgo": 0.04941484903398653,
                "inception": 0.07441490599170453
            },
            "pricePerShare": {
                "today": 1.0744149059917045,
                "weekAgo": 1.0728525832725868,
                "monthAgo": 1.0700688273975818
            },
            "extra": {
                "stakingRewardsAPR": 0.09515390494200027,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.03563139135029503,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.03563139135029503,
                    "v3OracleStratRatioAPR": 0.31312212554600016
                }
            }
        },
        "strategies": [
            {
                "address": "0x028eC7330ff87667b6dfb0D94b954c820195336c",
                "name": "DAI-1 yVault",
                "details": {
                    "totalDebt": "121515683979646756251922",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730174927,
                    "debtRatio": 1243
                }
            },
            {
                "address": "0x6164045FC2b2b269ffcaB2197736A74B1725B6C6",
                "name": "StrategyGearboxLenderDAI",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1726100159
                }
            },
            {
                "address": "0x3927C4AD1D63BF9629fDaE1318aa31DF9135F544",
                "name": "DAI-Ajna Router",
                "details": {
                    "totalDebt": "855780365458959311454797",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730239283,
                    "debtRatio": 8757
                }
            }
        ],
        "staking": {
            "address": "0x38E3d865e34f7367a69f096C80A4fc329DB38BF4",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731542400,
                    "apr": 0.09515390494200027,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0x92545bCE636E6eE91D88D2D017182cD0bd2fC22e",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 4.834122968126467e+22,
        "pricePerShare": "1074408424006837953",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xc56413869c6CDf96496f2b1eF801fEDBdFA7dDB0",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvWETH-1",
        "name": "WETH",
        "category": "Volatile",
        "version": "3.0.2",
        "description": "Multi strategy WETH vault. \u003cbr/\u003e\u003cbr/\u003eMulti strategy vaults are (wait for it) vaults that contain multiple strategies. Multi strategy vaults give the vault creator flexibility to balance risk and opportunity across multiple different strategies.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "520094132583447786748",
            "tvl": 1275676.4865180294,
            "price": 2452.78
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.02909262687953584,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.03560453683828017,
                "monthAgo": 0.02909262687953584,
                "inception": 0.013086590359132176
            },
            "pricePerShare": {
                "today": 1.0130865903591322,
                "weekAgo": 1.0123952997831809,
                "monthAgo": 1.0106699019463348
            },
            "extra": {
                "stakingRewardsAPR": 0.04910381096308081,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.013259614349746096,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.019191240344490712,
                    "v3OracleStratRatioAPR": 0.013259614349746096
                }
            }
        },
        "strategies": [
            {
                "address": "0x288991C055F94E9A0dcF0Ad08Ee3496E96E68142",
                "name": "stETH accumulator",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1728518063
                }
            },
            {
                "address": "0x365cC9c28Df1663fA37C565A3aC1Addc3A219e15",
                "name": "Spark WETH Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1728283631
                }
            },
            {
                "address": "0x90759801579208B28D2D36D13b1ED7443D1b717F",
                "name": "Aave V3 WETH Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1728351743
                }
            },
            {
                "address": "0xd2eFB90C569eBD5b83D5cFB8632322edFAc203A5",
                "name": "Aave V3 WETH Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1728444143
                }
            },
            {
                "address": "0x23eE3D14F09946A084350CC6A7153fc6eb918817",
                "name": "Compound V3 WETH Lender",
                "details": {
                    "totalDebt": "367550523496722550893",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730037551,
                    "debtRatio": 7067
                }
            },
            {
                "address": "0xC7baE383738274ea8C3292d53AfBB3b42B348DF0",
                "name": "Aave V3 Lido WETH Lender",
                "details": {
                    "totalDebt": "152543609086725235855",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1730162039,
                    "debtRatio": 2933
                }
            }
        ],
        "staking": {
            "address": "0x5943F7090282Eb66575662EADf7C60a717a7cE4D",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731542400,
                    "apr": 0.04910381096308081,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0xc56413869c6CDf96496f2b1eF801fEDBdFA7dDB0",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 3.711278004126626e+22,
        "pricePerShare": "1013083265024251039",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x2F2BBc50DB252eeADD2c9B9197beb6e5Aef87e48",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-ENA",
        "name": "yPT-ENA Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x57e114B691Db790C35207b2e685D4A43181e6061",
            "name": "ENA",
            "symbol": "ENA",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "150116780156745164336235",
            "tvl": 53747.811967321046,
            "price": 0.35804
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.24087744191753663,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0.6917465518842125,
                "monthAgo": 0.24087744191753663,
                "inception": 0.041131448004287696
            },
            "pricePerShare": {
                "today": 1.0411314480042877,
                "weekAgo": 1.0275002472598622,
                "monthAgo": 1.020919141870178
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 2.7996663053225124,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xd5d388D8331fCbD4Af0DFAE9Be14C2c34897Cf24",
                "name": "yPT-ENA (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "150116780156745164336235",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1730366315,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x05086056e7111346e246E5b97153Ae8cC6fc4A71",
                "name": "yPT-ENA (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1724913071
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x2F2BBc50DB252eeADD2c9B9197beb6e5Aef87e48",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 1.2946635455353055e+22,
        "pricePerShare": "1040889529707741850",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0xDDa02A2FA0bb0ee45Ba9179a3fd7e65E5D3B2C90",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-agETH",
        "name": "yPT-agETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xe1B4d34E8754600962Cd944B535180Bd758E6c2e",
            "name": "Kelp Gain",
            "symbol": "agETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "51681182209888713631",
            "tvl": 129135.76998784894,
            "price": 2498.7
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.09033321548054261,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0.03925365536605044,
                "monthAgo": 0.09033321548054261,
                "inception": 0.007526728696040763
            },
            "pricePerShare": {
                "today": 1.0075267286960408,
                "weekAgo": 1.0067688232304446,
                "monthAgo": 1.0001013285197489
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.05683580380028008,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.05683580380028008
                }
            }
        },
        "strategies": [
            {
                "address": "0x5b4f1009c456271407E5dE95909979d52Aea5557",
                "name": "yPT-agETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "51681182209888713631",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1730035307,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xDDa02A2FA0bb0ee45Ba9179a3fd7e65E5D3B2C90",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 1.1665249336558147e+22,
        "pricePerShare": "1007526728696040881",
        "info": {
            "riskLevel": 3,
            "uiNotice": "Depositing into this vault grants an extra 1x Kelp Miles and 1x EigenLayer Points on [KelpDAO](https://kelpdao.xyz/dashboard/)",
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0xe5175a2EB7C40bC5f0E9DE4152caA14eab0fFCb7",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-weETHs",
        "name": "yPT-weETHs Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x917ceE801a67f933F2e6b33fC0cD1ED2d5909D88",
            "name": "Super Symbiotic LRT",
            "symbol": "weETHs",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "54577640965000517089",
            "tvl": 134674.69529241597,
            "price": 2467.58
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.06347388901718588,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0.009210620029507984,
                "monthAgo": 0.06347388901718588,
                "inception": 0.017025872548885657
            },
            "pricePerShare": {
                "today": 1.0170258725488857,
                "weekAgo": 1.0168462547643173,
                "monthAgo": 1.0117475532141358
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.049216573743810166,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.11740773876932842,
                    "v3OracleStratRatioAPR": 0.049216573743810166
                }
            }
        },
        "strategies": [
            {
                "address": "0xE7d7Dfd8e393bF28A6F2Cad5A0e4078f35049Fb7",
                "name": "yPT-weETHs (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1724914259
                }
            },
            {
                "address": "0xD769d276d1d2858d76Ea771d7Cf6e03e39973040",
                "name": "yPT-weETHs (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "54577640965000517089",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1730573819,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xe5175a2EB7C40bC5f0E9DE4152caA14eab0fFCb7",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 8.548326662414138e+21,
        "pricePerShare": "1017006403727990190",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses. Underlying SY contract which holds asset is upgradable"
        }
    },
    {
        "address": "0xAe7d8Db82480E6d8e3873ecbF22cf17b3D8A7308",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvUSDC-2",
        "name": "USDC-2 yVault",
        "category": "Stablecoin",
        "version": "3.0.2",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "name": "USD Coin",
            "symbol": "USDC",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "28873498524",
            "tvl": 28902.372022523996,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.04204225510622436,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.05069846005205662,
                "monthAgo": 0.04204225510622436,
                "inception": 0.02537199999999995
            },
            "pricePerShare": {
                "today": 1.025372,
                "weekAgo": 1.024376,
                "monthAgo": 1.021841
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.0235897489261776,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.0235897489261776,
                    "v3OracleStratRatioAPR": 0.04599547053591313
                }
            }
        },
        "strategies": [
            {
                "address": "0xBe53A109B494E5c9f97b9Cd39Fe969BE68BF6204",
                "name": "USDC-1 yVault",
                "details": {
                    "totalDebt": "12841117543",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730271359,
                    "debtRatio": 4447
                }
            },
            {
                "address": "0xf6E2d36c489e5B361CdC962D4568ceA663AD5ddC",
                "name": "StrategyGearboxLenderUSDC",
                "details": {
                    "totalDebt": "12950335125",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730274263,
                    "debtRatio": 4485
                }
            },
            {
                "address": "0x797DD80692c3b2dAdabCe8e30C07fDE5307D48a9",
                "name": "EVK Vault eUSDC-2",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1726503947
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xAe7d8Db82480E6d8e3873ecbF22cf17b3D8A7308",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 1.2151208977459558e+21,
        "pricePerShare": "1025368",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x57a8b4061AA598d2Bb5f70C5F931a75C9F511fc8",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-LBTC",
        "name": "yPT-LBTC (Corn) Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 8,
        "chainID": 1,
        "token": {
            "address": "0x8236a87084f8B84306f72007F36F2618A5634494",
            "name": "Lombard Staked Bitcoin",
            "symbol": "LBTC",
            "description": "",
            "decimals": 8
        },
        "tvl": {
            "totalAssets": "12171493",
            "tvl": 8321.6497641,
            "price": 68370
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.042532233333333926,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0.00000935301968389566,
                "monthAgo": 0.042532233333333926,
                "inception": 0.003495800000000049
            },
            "pricePerShare": {
                "today": 1.0034958,
                "weekAgo": 1.00349562,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.06562519813771206,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.06562519813771206
                }
            }
        },
        "strategies": [
            {
                "address": "0xb9261fad596C7AE8631c5DE57d51646AA627552A",
                "name": "yPT-LBTC (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "10682474",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1729331615,
                    "debtRatio": 8777
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x57a8b4061AA598d2Bb5f70C5F931a75C9F511fc8",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 353938349484984430000,
        "pricePerShare": "100349580",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0x57fC2D9809F777Cd5c8C433442264B6E8bE7Fce4",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-sUSDe",
        "name": "yPT-sUSDe Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
            "name": "Staked USDe",
            "symbol": "sUSDe",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2607066364601367286035",
            "tvl": 2903.3946012418246,
            "price": 1.113663480402336
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.025459628972495978,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0.025459628972495978,
                "inception": 0.0037387059997091576
            },
            "pricePerShare": {
                "today": 1.0037387059997092,
                "weekAgo": 1.0037387059997092,
                "monthAgo": 1.0016426962947222
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x8F6695aaCCEb1675Ad38Ff529e5FbAEBd76942e1",
                "name": "yPT-sUSDe (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1728763583
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x57fC2D9809F777Cd5c8C433442264B6E8bE7Fce4",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 73919349308364750000,
        "pricePerShare": "1003738705999709125",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0xa258C4606Ca8206D8aA700cE2143D7db854D168c",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvWETH",
        "name": "WETH yVault",
        "category": "Volatile",
        "version": "0.4.2",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "21147717017087635542245",
            "tvl": 51870697.34517222,
            "price": 2452.78
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.04894559773378106,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0.04621584529875508,
                "monthAgo": 0.04894559773378106,
                "inception": 0.08087124450692618
            },
            "pricePerShare": {
                "today": 1.0808712445069262,
                "weekAgo": 1.0799140828758824,
                "monthAgo": 1.0765404023034761
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x64E4779BfF8588ccDCa9f290b9Bc346a798f5277",
                "name": "Compound Finance Lender Optimizer",
                "description": "Supplies {{token}} to [Compound Finance](https://app.compound.finance/markets?market=1_ETH_0xA17581A9E3356d9A858b789D68B4d866e593aE94) to generate interest and earn COMP. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "1690022819018147793216",
                    "totalLoss": "0",
                    "totalGain": "22182084154435685505",
                    "performanceFee": 0,
                    "lastReport": 1730420723,
                    "debtRatio": 800
                }
            },
            {
                "address": "0x120FA5738751b275aed7F7b46B98beB38679e093",
                "name": "Lido Eth 2.0 Staking",
                "description": "Stakes {{token}} on [Lido.fi](https://stake.lido.fi) to mint stETH which accumulates ETH 2.0 staking rewards. This strategy will buy stETH off the market if it is cheaper than staking.",
                "details": {
                    "totalDebt": "19427133688092327004907",
                    "totalLoss": "865220532029741073",
                    "totalGain": "2646059417021754431330",
                    "performanceFee": 0,
                    "lastReport": 1730330207,
                    "debtRatio": 9200
                }
            },
            {
                "address": "0xec2DB4A1Ad431CC3b102059FA91Ba643620F0826",
                "name": "StrategyLenderYieldOptimiser",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "644680085367354053912",
                    "performanceFee": 0,
                    "lastReport": 1723855739
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xa258C4606Ca8206D8aA700cE2143D7db854D168c",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 2538842.2864275044,
        "pricePerShare": "1080865194583083415",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x27B5739e22ad9033bcBf192059122d163b60349D",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "st-yCRV",
        "name": "Staked Yearn CRV Vault",
        "category": "Curve",
        "version": "0.4.3",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xFCc5c47bE19d06BF83eB04298b026F81069ff65b",
            "name": "Yearn CRV",
            "symbol": "yCRV",
            "description": "yCRV is Yearn Finance's new and improved veCRV wrapper system designed to tokenize Yearn's veCRV position which passes all revenue and benefits along to users. This system is composed of a base-token called yCRV which a user can deposit into any one of two `activated` positons to earn yield or voting power: st-yCRV and lp-yCRV. st-yCRV yVault receives admin fees and bribes from locked CRV. lp-yCRV yVault converts yCRV into CRV/yCRV LP tokens and uses them to farm CRV emissions and trading fees.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "44757350037621050532065561",
            "tvl": 9840257.813725824,
            "price": 0.21985791843025865
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.167983828224771,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.27097053662594833,
                "monthAgo": 0.167983828224771,
                "inception": 0.8245936964083329
            },
            "pricePerShare": {
                "today": 1.824593696408333,
                "weekAgo": 1.8151608586453007,
                "monthAgo": 1.7997448176983606
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0xBdF157c3bad2164Ce6F9dc607fd115374010c5dC",
                "name": "StrategyYBSFarmer",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "50",
                    "totalGain": "2930191371297346531244646",
                    "performanceFee": 0,
                    "lastReport": 1724072651
                }
            },
            {
                "address": "0x23724D764d8b3d26852BA20d3Bc2578093d2B022",
                "name": "StrategyStYCRV",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "17857095240026695007064119",
                    "performanceFee": 0,
                    "lastReport": 1718848619
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x27B5739e22ad9033bcBf192059122d163b60349D",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 1653004.1782683795,
        "pricePerShare": "1824531645795505944",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvDAI",
        "name": "DAI yVault",
        "category": "Stablecoin",
        "version": "0.4.3",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "name": "Dai Stablecoin",
            "symbol": "DAI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "17451460873848000121360205",
            "tvl": 17468912.334721845,
            "price": 1.001
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.06177996996590315,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0.07060971198373903,
                "monthAgo": 0.06177996996590315,
                "inception": 0.1429984699219744
            },
            "pricePerShare": {
                "today": 1.1429984699219744,
                "weekAgo": 1.141452761551691,
                "monthAgo": 1.1372238680251714
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x3280499298ACe3FD3cd9C2558e9e8746ACE3E52d",
                "name": "StrategyLenderYieldOptimiser",
                "details": {
                    "totalDebt": "17451460873847999450670978",
                    "totalLoss": "0",
                    "totalGain": "1056179215318851055008772",
                    "performanceFee": 0,
                    "lastReport": 1730104487,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x01d127D90513CCB6071F83eFE15611C4d9890668",
                "name": "Compound Finance Flashmint Folding",
                "description": "Supplies and borrows {{token}} on [Compound Finance](https://app.compound.finance) simultaneously to earn COMP. Flashmints are used to mint DAI from [MakerDAO](https://oasis.app) to flashlend and fold the position, boosting the APY. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "231910699",
                    "totalLoss": "991",
                    "totalGain": "1299731113472308332255930",
                    "performanceFee": 0,
                    "lastReport": 1713640619
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 1079228.8793761106,
        "pricePerShare": "1142998469921974353",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvUSDC",
        "name": "USDC yVault",
        "category": "Stablecoin",
        "version": "0.4.3",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "name": "USD Coin",
            "symbol": "USDC",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "11655557233005",
            "tvl": 11667212.790238004,
            "price": 1.001
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.05540133495446136,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0.07106055083747986,
                "monthAgo": 0.05540133495446136,
                "inception": 0.10878399999999999
            },
            "pricePerShare": {
                "today": 1.108784,
                "weekAgo": 1.107275,
                "monthAgo": 1.103758
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x0Fd45d4fb70D1EC95264dA30934095443DC6af6A",
                "name": "Flux Finance Lender Optimizer",
                "description": "Supplies {{token}} to [Flux Finance](https://fluxfinance.com/lend) to generate interest. Earned interest is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "7503462993",
                    "performanceFee": 0,
                    "lastReport": 1709687183
                }
            },
            {
                "address": "0x97D868b5C2937355Bf89C5E5463d52016240fE86",
                "name": "Compound Finance Flashmint Folding",
                "description": "Supplies and borrows {{token}} on [Compound Finance](https://app.compound.finance) simultaneously to earn COMP. Flashmints are used to mint DAI from [MakerDAO](https://oasis.app) to flashlend and fold the position, boosting the APY. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "673787273369",
                    "performanceFee": 0,
                    "lastReport": 1709085815
                }
            },
            {
                "address": "0x2216E44fA633ABd2540dB72Ad34b42C7F1557cd4",
                "name": "StrategyLenderYieldOptimiser",
                "details": {
                    "totalDebt": "10643837699038",
                    "totalLoss": "0",
                    "totalGain": "789655077676",
                    "performanceFee": 0,
                    "lastReport": 1730575343,
                    "debtRatio": 9137
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 646379.1637769514,
        "pricePerShare": "1108768",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x206db0A0Af10Bec57784045e089A418771D20227",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDT",
        "name": "USDT CompoundV3 Lender",
        "category": "Stablecoin",
        "version": "3.0.2",
        "description": "Supplies {{token}} on [Compound Finance](https://app.compound.finance/markets/weth-mainnet) to generate interest and earn COMP. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "name": "Tether USD",
            "symbol": "USDT",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "3803368917101",
            "tvl": 3803368.917101,
            "price": 1
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.09825082334891712,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.11956566113009026,
                "monthAgo": 0.09825082334891712,
                "inception": 0.017136999999999958
            },
            "pricePerShare": {
                "today": 1.017137,
                "weekAgo": 1.01481,
                "monthAgo": 1.008989
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.05331896468757158,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.05331896468757158,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x206db0A0Af10Bec57784045e089A418771D20227",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 373684.12760485255,
        "pricePerShare": "1017130",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0xa540744DEDBDA9eF64cf753F0E851EfE4a419EA9",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-MIM-f",
        "name": "Curve MIM Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
            "name": "Curve MIM Pool",
            "symbol": "crvMIM",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This metapool contains 3Crv (DAI, USDC, and USDT) and MIM, a decentralized stablecoin collateralized with yVaults and other yield-bearing tokens on Abracadabra.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1184552017192906166297332",
            "tvl": 1198821.411890419,
            "price": 1.0120462373035568
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.24908714383367775,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.2986605904769453,
                "monthAgo": 0.24908714383367775,
                "inception": 0.33793821779106326
            },
            "pricePerShare": {
                "today": 1.3379382177910633,
                "weekAgo": 1.33031850281296,
                "monthAgo": 1.31109625439665
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.183819668836431,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0034999999999999996,
                    "boostedAPR": 0.20074407648492332,
                    "baseAPR": 0.08029763059396933,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xF4B4464d03C1F3226C23Fe58407B558489510DaB",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1671641375
                }
            },
            {
                "address": "0x34eC144cBCF4CeD98bd00209Fad37D1010C214Fe",
                "name": "StrategyCurveBoostedFactory-MIM-3LP3CRV-f",
                "details": {
                    "totalDebt": "1178634301196294765285464",
                    "totalLoss": "0",
                    "totalGain": "103085758168598104098851",
                    "performanceFee": 0,
                    "lastReport": 1730617259,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x9430A2501e5f2Cd66741375baAbB9576E8FB5f48",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "235976791972806235571093",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xa540744DEDBDA9eF64cf753F0E851EfE4a419EA9",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 298611.0014544414,
        "pricePerShare": "1337843388284335486",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/mim/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x3B27F92C0e212C671EA351827EDF93DB27cc0c65",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvUSDT",
        "name": "USDT yVault",
        "category": "Stablecoin",
        "version": "0.4.3",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "name": "Tether USD",
            "symbol": "USDT",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "6418346370313",
            "tvl": 6418346.370313,
            "price": 1
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.0403900731642913,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0.06629223254687241,
                "monthAgo": 0.0403900731642913,
                "inception": 0.07895800000000008
            },
            "pricePerShare": {
                "today": 1.078958,
                "weekAgo": 1.077588,
                "monthAgo": 1.075388
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0xd8F414beB0aEb5784c5e5eBe32ca9fC182682Ff8",
                "name": "Aave Optimizer",
                "description": "Supplies {{token}} to [AAVE](https://app.aave.com) v3 to generate interest and earn rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "426679035132",
                    "performanceFee": 0,
                    "lastReport": 1722450107
                }
            },
            {
                "address": "0xBc04eFD0D18685BA97cFAdE4e2D3171701B4099c",
                "name": "Aave Lender Optimizer",
                "description": "Supplies {{token}} to [AAVE](https://app.aave.com/home) to generate interest and earn stkAAVE tokens. Once unlocked, earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "237715678936",
                    "performanceFee": 0,
                    "lastReport": 1710276719
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x3B27F92C0e212C671EA351827EDF93DB27cc0c65",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 259237.4794907056,
        "pricePerShare": "1078950",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x6E9455D109202b426169F0d8f01A3332DAE160f3",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "lp-yCRVv2",
        "name": "LP Yearn CRV Vault v2",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x99f5aCc8EC2Da2BC0771c32814EFF52b712de1E5",
            "name": "Curve yCRV v2 Pool",
            "symbol": "yCRV-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This factory pool contains yCRV and CRV. CRV is Curve's governance token, and yCRV is Yearn's new liquid veCRV wrapper, redesigned from the ground up to give users 'the best CRV yields in DeFi'.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "5901774710005931350221585",
            "tvl": 1368013.672455245,
            "price": 0.231797
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.16104359706055663,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.20577007168359976,
                "monthAgo": 0.16104359706055663,
                "inception": 0.27796320623709514
            },
            "pricePerShare": {
                "today": 1.2779632062370951,
                "weekAgo": 1.2729398351469863,
                "monthAgo": 1.2612684764583602
            },
            "extra": {
                "stakingRewardsAPR": 0.18987138402606019,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crvconvex",
                "netAPR": 0.16614568336350125,
                "composite": {
                    "boost": 1.9129233105930126,
                    "poolAPY": 0.00507,
                    "boostedAPR": 0.16952366359947432,
                    "baseAPR": 0.10038751592749894,
                    "cvxAPR": 0.0017564984065010067,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x9004D433d710194A033C15041BACd134fc9ba50F",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "513937085454005241907825",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x7Bba4a580B97CFBB0f100Fb3EA74Ae9F1377D039",
                "name": "StrategyCurveBoostedFactory-yCRV-f",
                "details": {
                    "totalDebt": "1768581785502314134103328",
                    "totalLoss": "0",
                    "totalGain": "132753160511110124066155",
                    "performanceFee": 0,
                    "lastReport": 1730165543,
                    "debtRatio": 3000
                }
            },
            {
                "address": "0xDa64D669b3fd915f58d4cac799A57aeae0593aE7",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "4126690832838732979574433",
                    "totalLoss": "0",
                    "totalGain": "438316771005785919377567",
                    "performanceFee": 0,
                    "lastReport": 1730143343,
                    "debtRatio": 7000
                }
            }
        ],
        "staking": {
            "address": "0x107717C98C8125A94D3d2Cc82b86a1b705f3A27C",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731472331,
                    "apr": 0.18987138402606019,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0x6E9455D109202b426169F0d8f01A3332DAE160f3",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 220309.84264021475,
        "pricePerShare": "1277963206237095097",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-280/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x11AaE8beE9b1Da827C641540D20e4e664677e06F",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvyPRISMA-1",
        "name": "yPRISMA-1 yVault",
        "category": "Prisma",
        "version": "3.0.2",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xe3668873D944E4A949DA05fc8bDE419eFF543882",
            "name": "Yearn PRISMA",
            "symbol": "yPRISMA",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "8068186456916392385035320",
            "tvl": 195679.42196724084,
            "price": 0.02425321018696787
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.8692118200399775,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.7563072773001941,
                "monthAgo": 0.8692118200399775,
                "inception": 0.46547857208328747
            },
            "pricePerShare": {
                "today": 1.4654785720832875,
                "weekAgo": 1.4445264054291815,
                "monthAgo": 1.3677627719422327
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.5504027039712505,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.5504027039712505,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xA323CCcbCbaDe7806ca5bB9951bebD89A7882bf8",
                "name": "StrategyYBSyPRISMA",
                "details": {
                    "totalDebt": "8068186456916392385035320",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730333231,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x11AaE8beE9b1Da827C641540D20e4e664677e06F",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 170086.86651251616,
        "pricePerShare": "1465367657697046017",
        "info": {
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x961Ad224fedDFa468c81acB3A9Cc2cC4731809f4",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-dgnETHETH+-f",
        "name": "Curve dgnETH-ETH+ Factory",
        "category": "Curve",
        "version": "0.4.6",
        "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains two different Reserve RTokens, dgnETH and ETH+. These RTokens are 100% backed by a diversified set of underlying collateral tokens, all pegged to ETH. For more details, check out Reserve's [website](https://app.reserve.org/compare).",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5bA541585D6297B756F08B7c61a7E37752123B4F",
            "name": "dgnETH/ETH+",
            "symbol": "dgnETHETH+",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "451913347176213681113",
            "tvl": 1110280.832260523,
            "price": 2456.844523840968
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.1393908743563907,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.05643464115668161,
                "monthAgo": 0.1393908743563907,
                "inception": 0.011553668075226176
            },
            "pricePerShare": {
                "today": 1.0115536680752262,
                "weekAgo": 1.0104600389029232,
                "monthAgo": 1.0000957864765596
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "convexcrv",
                "netAPR": 0.0747025489856981,
                "composite": {
                    "boost": 1.9500049910165458,
                    "poolAPY": 0.01973,
                    "boostedAPR": 0.06209226960539222,
                    "baseAPR": 0.03828659517288657,
                    "cvxAPR": 0.0006072032506118389,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x464f3e9ad5B4765C8aF8f75F97DD8b5b9767Ae88",
                "name": "StrategyCurveBoostedFactory-dgnETHETH+",
                "details": {
                    "totalDebt": "135322229491237525668",
                    "totalLoss": "0",
                    "totalGain": "1903713609088512072",
                    "performanceFee": 0,
                    "lastReport": 1730400515,
                    "debtRatio": 3000
                }
            },
            {
                "address": "0x02d89f68756fED0eD3f1Dc33aEf7E4E5E2D311b5",
                "name": "StrategyConvexFactory-dgnETHETH+",
                "details": {
                    "totalDebt": "315958903852833419311",
                    "totalLoss": "0",
                    "totalGain": "543484529308796383",
                    "performanceFee": 0,
                    "lastReport": 1730400539,
                    "debtRatio": 7000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x961Ad224fedDFa468c81acB3A9Cc2cC4731809f4",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 154763.01598993546,
        "pricePerShare": "1011527177148038848",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-224/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x6949145469362F9eeaB3c96Ea41b51D9B4cC2b21",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-TriCryptoINV-f",
        "name": "Curve TriCryptoINV Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5426178799ee0a0181A89b4f57eFddfAb49941Ec",
            "name": "TricryptoINV",
            "symbol": "crvUSDCWETHINV",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains USDC, wETH, and INV. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2706372314315938160714",
            "tvl": 333739.79693701054,
            "price": 123.31629139554161
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.43678118101517016,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.5859579308228317,
                "monthAgo": 0.43678118101517016,
                "inception": 0.4326775921564123
            },
            "pricePerShare": {
                "today": 1.4326775921564123,
                "weekAgo": 1.41675671860249,
                "monthAgo": 1.3830271617124013
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crvconvex",
                "netAPR": 0.3168817210573156,
                "composite": {
                    "boost": 1.8655453083327935,
                    "poolAPY": 0.018525,
                    "boostedAPR": 0.3081489644124281,
                    "baseAPR": 0.1815554580374572,
                    "cvxAPR": 0.0024368728733046535,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xa279b480428e58c248ae6CC110aaF67fB8237bAA",
                "name": "StrategyCurveBoostedFactory-crvUSDCWETHINV",
                "details": {
                    "totalDebt": "1214309897537703409928",
                    "totalLoss": "0",
                    "totalGain": "227273582535721882282",
                    "performanceFee": 0,
                    "lastReport": 1730326379,
                    "debtRatio": 4500
                }
            },
            {
                "address": "0x95Bd6CC6D027542b56036094BfC411F8085DFee2",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "439984981918863946242",
                    "performanceFee": 0,
                    "lastReport": 1719490619
                }
            },
            {
                "address": "0xFA5C4a53D49Fd936cA2b757F2C64d4007DD87E5B",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "1475673018947204272555",
                    "totalLoss": "0",
                    "totalGain": "235964224166546395084",
                    "performanceFee": 0,
                    "lastReport": 1729964075,
                    "debtRatio": 5500
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x6949145469362F9eeaB3c96Ea41b51D9B4cC2b21",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 145771.26265791053,
        "pricePerShare": "1432618608688591657",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-tricrypto-3/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x05329AAb081B125eEF7FbbC8b857428D478E692B",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "yscrvUSD",
        "name": "Sturdy crvUSD Compounder",
        "category": "Curve",
        "version": "3.0.2",
        "description": "Supplies {{token}} to the corresponding [Sturdy](https://v2.sturdy.finance/aggregators) aggregator earning the underlying yield and compounding the rewards",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
            "name": "Curve.Fi USD Stablecoin",
            "symbol": "crvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "567629318629945594822867",
            "tvl": 566290.2810672976,
            "price": 0.997641
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.23071436912483528,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.278276649031075,
                "monthAgo": 0.23071436912483528,
                "inception": 0.06083033954281291
            },
            "pricePerShare": {
                "today": 1.060830339542813,
                "weekAgo": 1.0551989407018334,
                "monthAgo": 1.0410883632472139
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.12039375493535642,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.12039375493535642,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x05329AAb081B125eEF7FbbC8b857428D478E692B",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 130651.30493796722,
        "pricePerShare": "1060792691611446697",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                1,
                1,
                1,
                1,
                1,
                1,
                5,
                2,
                3,
                5,
                1
            ]
        }
    },
    {
        "address": "0x04c8bfe2eb09a1e2e9fA97A2fd970E06d87B43de",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-GEAR-ETH-f",
        "name": "Curve GEAR-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5Be6C45e2d074fAa20700C49aDA3E88a1cc0025d",
            "name": "Curve GEAR-ETH Pool",
            "symbol": "crvGEARETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV and GEAR emissions. This factory crypto pool contains GEAR, and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "65416550863748594372494",
            "tvl": 411096.0950980286,
            "price": 6.2842826420835145
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.2713557877890469,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.36468536503993015,
                "monthAgo": 0.2713557877890469,
                "inception": 0.6477116980337387
            },
            "pricePerShare": {
                "today": 1.6477116980337387,
                "weekAgo": 1.636267697545854,
                "monthAgo": 1.611764174421655
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.19101706468389068,
                "composite": {
                    "boost": 1.5460901265029126,
                    "poolAPY": 0.0098,
                    "boostedAPR": 0.20244118298210076,
                    "baseAPR": 0.00013834217866159904,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.20222729350559315
                }
            }
        },
        "strategies": [
            {
                "address": "0x11829e810AfCca3e28B0c7d9e560A3f3E1294ba3",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1705782407
                }
            },
            {
                "address": "0xCCB65389cDCf52aB636973a93aA9B518B7f3b933",
                "name": "StrategyCurveBoostedFactory-crvGEARETH-f",
                "details": {
                    "totalDebt": "65210602485611428274516",
                    "totalLoss": "0",
                    "totalGain": "5757513103629613674166",
                    "performanceFee": 0,
                    "lastReport": 1730248475,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xccb0da3E219dE478A0975599d9c362E724A6DfF9",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "23475572853579310851965",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x04c8bfe2eb09a1e2e9fA97A2fd970E06d87B43de",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 111553.3047423265,
        "pricePerShare": "1647711698033738800",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-192/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xbA61BaA1D96c2F4E25205B331306507BcAeA4677",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "lp-yPRISMA",
        "name": "LP Yearn PRISMA Vault",
        "category": "Prisma",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x69833361991ed76f9e8DBBcdf9ea1520fEbFb4a7",
            "name": "Curve.fi Factory Plain Pool: PRISMA/yPRISMA",
            "symbol": "yPRISMA-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "4626519374621077657886271",
            "tvl": 120775.28827448323,
            "price": 0.026105
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.787368853167712,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 1.075530115226999,
                "monthAgo": 0.787368853167712,
                "inception": 1.5225112544457566
            },
            "pricePerShare": {
                "today": 2.5225112544457566,
                "weekAgo": 2.471531941468862,
                "monthAgo": 2.3691886245614597
            },
            "extra": {
                "stakingRewardsAPR": 0.5089786644236989,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "prisma",
                "netAPR": 0.753978330001871,
                "composite": {
                    "boost": 1.7632677615995422,
                    "poolAPY": 0.0008,
                    "boostedAPR": 0,
                    "baseAPR": 0.00004930824844540105,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.7532583300018709
                }
            }
        },
        "strategies": [
            {
                "address": "0xBbdd8D48fe9A1D11552677EC097A69D4AF487C83",
                "name": "StrategyPrismaConvexFactory-yPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "304383397599950529015045",
                    "performanceFee": 0,
                    "lastReport": 1706710655
                }
            },
            {
                "address": "0x4cf681652b9Bf9C32129b3F6edb6873e8c96eE63",
                "name": "StrategyPrismaConvexFactory-yPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "667547427378249218037804",
                    "performanceFee": 0,
                    "lastReport": 1722011651
                }
            },
            {
                "address": "0xAEF9Ae268c601606679c8AfB7f5285BDB9c58f54",
                "name": "StrategyPrismaConvexFactory-yPRISMA-f",
                "details": {
                    "totalDebt": "4606038861408034031275316",
                    "totalLoss": "0",
                    "totalGain": "473903896699705740210428",
                    "performanceFee": 0,
                    "lastReport": 1730330975,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x6CBDC5591Dab3A15CdEb8E325D67192e04Db9573",
                "name": "StrategyCurveBoostedFactory-yPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1701690311
                }
            },
            {
                "address": "0x9C2Ac19775023bEc9dD1f9208CBcD9fC3a19D5f2",
                "name": "StrategyConvexFactory-yPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1700812295
                }
            },
            {
                "address": "0xEe0A6d15F526f00b73a084aD1C5a81cff09Cd2C5",
                "name": "StrategyCurveBoostedFactory-yPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494399
                }
            }
        ],
        "staking": {
            "address": "0x6130E6cD924a40b24703407F246966D7435D4998",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731472331,
                    "apr": 0.5089786644236989,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0xbA61BaA1D96c2F4E25205B331306507BcAeA4677",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 95094.70021967968,
        "pricePerShare": "2522223174062583488",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-372/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x7eE351aA702C8fC735D77Fb229b7676AC15D7c79",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDC",
        "name": "Compound V3 USDC Lender",
        "category": "Stablecoin",
        "version": "3.0.2",
        "description": "Supplies {{token}} on [Compound Finance](https://app.compound.finance/markets/usdc-mainnet) to generate interest and earn COMP. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "name": "USD Coin",
            "symbol": "USDC",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "509406322103",
            "tvl": 509915.72842510295,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.1701834476275333,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.4110596063220851,
                "monthAgo": 0.1701834476275333,
                "inception": 0.07214900000000002
            },
            "pricePerShare": {
                "today": 1.072149,
                "weekAgo": 1.063763,
                "monthAgo": 1.057359
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.038153663677293226,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.038153663677293226,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x7eE351aA702C8fC735D77Fb229b7676AC15D7c79",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 86779.216662889,
        "pricePerShare": "1072108",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0x58900d761Ae3765B75DDFc235c1536B527F25d8F",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-yETH-f",
        "name": "Curve yETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x69ACcb968B19a53790f43e57558F5E443A91aF22",
            "name": "Curve.fi Factory Plain Pool: yETH",
            "symbol": "yETH-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "697230765534480403474",
            "tvl": 1708073.5068483602,
            "price": 2449.7965254573814
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.04659600099714357,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.059863728546832334,
                "monthAgo": 0.04659600099714357,
                "inception": 0.04044747200687682
            },
            "pricePerShare": {
                "today": 1.0404474720068768,
                "weekAgo": 1.0392543337184552,
                "monthAgo": 1.036477960111299
            },
            "extra": {
                "stakingRewardsAPR": 0.038111757605966856,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crvconvex",
                "netAPR": 0.030826403297039652,
                "composite": {
                    "boost": 1.9151595564856483,
                    "poolAPY": 0.00009599999999999999,
                    "boostedAPR": 0.0337114204920132,
                    "baseAPR": 0.020308614326707275,
                    "cvxAPR": 0.00040459262895775025,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x472F4e5533Fb8f7fEE97DAcd3DBAE9d83867AB07",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "585235026815164510942",
                    "totalLoss": "0",
                    "totalGain": "37895251326398768165",
                    "performanceFee": 0,
                    "lastReport": 1730153171,
                    "debtRatio": 8400
                }
            },
            {
                "address": "0x045b76468342D765bDAa6D2d74BacEE4EcDB6F5B",
                "name": "StrategyCurveBoostedFactory-yETH-f",
                "details": {
                    "totalDebt": "111414780410414209750",
                    "totalLoss": "0",
                    "totalGain": "1846897575502257151",
                    "performanceFee": 0,
                    "lastReport": 1730101991,
                    "debtRatio": 1600
                }
            },
            {
                "address": "0x0a94d79e811793141a04106Fa797fB6d61163102",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "9136976399496802503",
                    "performanceFee": 0,
                    "lastReport": 1719490595
                }
            }
        ],
        "staking": {
            "address": "0x81d93531720d86f0491DeE7D03f30b3b5aC24e59",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731472331,
                    "apr": 0.038111757605966856,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0x58900d761Ae3765B75DDFc235c1536B527F25d8F",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 79589.3948283007,
        "pricePerShare": "1040447472006876753",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-347/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xcC2EFb8bEdB6eD69ADeE0c3762470c38D4730C50",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-crvDOLA-f",
        "name": "Curve crvDOLA Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xef484de8C07B6e2d732A92B5F78e81B38f99f95E",
            "name": "DOLA/FRAXPYUSD",
            "symbol": "crvDOLA",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1059272359200085924314474",
            "tvl": 1056027.278153031,
            "price": 0.9969364998351268
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.06594410369109142,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.1683532919222143,
                "monthAgo": 0.06594410369109142,
                "inception": 0.005420063317076007
            },
            "pricePerShare": {
                "today": 1.005420063317076,
                "weekAgo": 1.002184317555943,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.16393503708859244,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0051,
                    "boostedAPR": 0.17705004120954715,
                    "baseAPR": 0.07082001648381886,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x74E37A751e163f66148402198DA13DF5dC47cFaF",
                "name": "StrategyConvexFraxFactory-crvDOLA",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1727722115
                }
            },
            {
                "address": "0xbbbE0410ac3e0cd29bB1E8FbFAd4CaF36b0018F0",
                "name": "StrategyCurveBoostedFactory-crvDOLA",
                "details": {
                    "totalDebt": "1057289690215063395521708",
                    "totalLoss": "0",
                    "totalGain": "8629900334877509556275",
                    "performanceFee": 0,
                    "lastReport": 1730507603,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xA668D3191De7a0188DFa622894824106487a634d",
                "name": "StrategyConvexFactory-crvDOLA",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1727128379
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xcC2EFb8bEdB6eD69ADeE0c3762470c38D4730C50",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 69638.77233114452,
        "pricePerShare": "1005393393265565363",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-96/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x2c8a33C66c00264316Ea4E4433e86A386Eb6ECBf",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-pxETH-stETH-f",
        "name": "Curve pxETH-stETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6951bDC4734b9f7F3E1B74afeBC670c736A0EDB6",
            "name": "pxETH/stETH",
            "symbol": "pxsteth",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "21706573949988057222",
            "tvl": 53861.5332029584,
            "price": 2481.3465877690032
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 1.2601191982968953,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 5.26335602132682,
                "monthAgo": 1.2601191982968953,
                "inception": 0.3278646230751483
            },
            "pricePerShare": {
                "today": 1.3278646230751483,
                "weekAgo": 1.2061177968321322,
                "monthAgo": 1.203243010642752
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.1095718149347194,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0111,
                    "boostedAPR": 0.11064646103857712,
                    "baseAPR": 0.044258584415430846,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xeCBD24eA29b5Cf23fBe658dA506589982EF085D4",
                "name": "StrategyConvexFactory-pxsteth",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "8939966186768688012",
                    "performanceFee": 0,
                    "lastReport": 1730397923
                }
            },
            {
                "address": "0x18AdB09Aa21369D7d7FAE76596e887f9bAEE0ef8",
                "name": "StrategyCurveBoostedFactory-pxsteth",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "10281878271277455514",
                    "performanceFee": 0,
                    "lastReport": 1719490535
                }
            },
            {
                "address": "0xdA00352a66577B2C844678EC78c062a2f68836A5",
                "name": "StrategyCurveBoostedFactory-pxsteth",
                "details": {
                    "totalDebt": "21706573949988057222",
                    "totalLoss": "0",
                    "totalGain": "15357613181790310813",
                    "performanceFee": 0,
                    "lastReport": 1730605091,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x2c8a33C66c00264316Ea4E4433e86A386Eb6ECBf",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 67871.95203875354,
        "pricePerShare": "1327444674161397057",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-30/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x150F76e1339A918BaA38338ED9bd695Bd0924Bcf",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-alETH-frxETH-f",
        "name": "Curve alETH-frxETH Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xB657B895B265C38c53FFF00166cF7F6A3C70587d",
            "name": "Curve frxETH-alETH Pool",
            "symbol": "alfrxETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains frxETH and alETH (Alchemix ETH).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "89833061605529991410",
            "tvl": 245506.6067052595,
            "price": 2732.920400546011
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.2577125030195886,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.2943495234728808,
                "monthAgo": 0.2577125030195886,
                "inception": 0.10565637510154269
            },
            "pricePerShare": {
                "today": 1.1056563751015427,
                "weekAgo": 1.0994499150738986,
                "monthAgo": 1.082722313929118
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.2208466244995252,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0002,
                    "boostedAPR": 0.24518513833280575,
                    "baseAPR": 0.0980740553331223,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x103f3Fb1EC32A85f4692DF1B4B18C428DbAc59da",
                "name": "StrategyCurveBoostedFactory-alfrxETH-f",
                "details": {
                    "totalDebt": "89460236783480652844",
                    "totalLoss": "0",
                    "totalGain": "5185075818078480153",
                    "performanceFee": 0,
                    "lastReport": 1730489411,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x7A399ddea6EF670a74F2Fbe5a3A66BeA9CF82576",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "627087778166296654",
                    "performanceFee": 0,
                    "lastReport": 1719490439
                }
            },
            {
                "address": "0x167E0fc591abF5aB77434e115Ecf0fbBAcE39A54",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1685706299
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x150F76e1339A918BaA38338ED9bd695Bd0924Bcf",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 63270.12212185814,
        "pricePerShare": "1105591411667797168",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-253/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x93cF0b02D0A2B61551d107378AFf60CEAe40c342",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-sdYFIv2-f",
        "name": "Curve sdYFIv2 Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x852b90239C5034b5bb7a5e54eF1bEF3Ce3359CC8",
            "name": "Curve sdYFI-YFI Pool",
            "symbol": "sdYFI",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains YFI and sdYFI, a tokenized veYFI from [StakeDAO](https://lockers.stakedao.org).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "102578928949221437111",
            "tvl": 450980.72065076395,
            "price": 4396.426491
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.13132512731580426,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0.13132512731580426,
                "inception": 0.0666231526272889
            },
            "pricePerShare": {
                "today": 1.066623152627289,
                "weekAgo": 1.066623152627289,
                "monthAgo": 1.0552331286572532
            },
            "extra": {
                "stakingRewardsAPR": 0.5813883212520261,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "convexcrv",
                "netAPR": 0.49575384780579945,
                "composite": {
                    "boost": 2.235201272895438,
                    "poolAPY": 0.00016,
                    "boostedAPR": 0.4285725413696848,
                    "baseAPR": 0.031985448427588326,
                    "cvxAPR": 0.006222478575610962,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x94062C6aB70821b4Bc30Cd686503a5069aFb6B1d",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "89189867849632924",
                    "performanceFee": 0,
                    "lastReport": 1719490511
                }
            },
            {
                "address": "0x4bFbD6875ED316A4fbaC5aBc36aab409D215Ab8a",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "1285257654291000000",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730131463,
                    "debtRatio": 8000
                }
            },
            {
                "address": "0x24B63E52Ac85D880efBC7D7d78250B402BE45d9B",
                "name": "StrategyCurveBoostedFactory-sdYFIpool-f",
                "details": {
                    "totalDebt": "101277766930733039153",
                    "totalLoss": "0",
                    "totalGain": "2575245866766678327",
                    "performanceFee": 0,
                    "lastReport": 1729853843,
                    "debtRatio": 2000
                }
            }
        ],
        "staking": {
            "address": "0xB61F8fff8Dd8C438E0d61C07b5536cE3d728f660",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731542400,
                    "apr": 0.5813883212520261,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0x93cF0b02D0A2B61551d107378AFf60CEAe40c342",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 59225.10055643473,
        "pricePerShare": "1066623152627288902",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-302/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xa669d6C2Df33F41940c2646A9BF3031e2524d515",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-sdCRVv2-f",
        "name": "Curve sdCRVv2 Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xCA0253A98D16e9C1e3614caFDA19318EE69772D0",
            "name": "Curve sdCRV-CRV Pool",
            "symbol": "sdCRVCRV-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains CRV and sdCRV, a tokenized veCRV from [StakeDAO](https://lockers.stakedao.org).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "672752501306720774845058",
            "tvl": 157238.6570370425,
            "price": 0.23372437372084087
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.3616462525177888,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.26846878101446836,
                "monthAgo": 0.3616462525177888,
                "inception": 0.12405428102087601
            },
            "pricePerShare": {
                "today": 1.124054281020876,
                "weekAgo": 1.1182964896026986,
                "monthAgo": 1.0916069737912415
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.20883842844846537,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.009399999999999999,
                    "boostedAPR": 0.22264269827607264,
                    "baseAPR": 0.08905707931042905,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xf87D078899626cf1a4Ef49aCba0B60138BAc37b2",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1691747867
                }
            },
            {
                "address": "0x671d552131130D61d8efE7f1b36569838199E829",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "976817282469564305770",
                    "performanceFee": 0,
                    "lastReport": 1719321347
                }
            },
            {
                "address": "0x51d749Df68eCF652dE70F587A92c119D454b7563",
                "name": "StrategyCurveBoostedFactory-sdCRVlp-f",
                "details": {
                    "totalDebt": "668923535784340854252760",
                    "totalLoss": "0",
                    "totalGain": "47953443866144798974617",
                    "performanceFee": 0,
                    "lastReport": 1730109479,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xa669d6C2Df33F41940c2646A9BF3031e2524d515",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 56864.771068376256,
        "pricePerShare": "1124054281020875902",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-300/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x23eE3D14F09946A084350CC6A7153fc6eb918817",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysWETH",
        "name": "Compound V3 WETH Lender",
        "category": "Volatile",
        "version": "3.0.2",
        "description": "Supplies {{token}} on [Compound Finance](https://app.compound.finance/markets/weth-mainnet) to generate interest and earn COMP. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "368920502254321671005",
            "tvl": 904880.8295193552,
            "price": 2452.78
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.06257582957978969,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.03975195119602004,
                "monthAgo": 0.06257582957978969,
                "inception": 0.24145970036335762
            },
            "pricePerShare": {
                "today": 1.2414597003633576,
                "weekAgo": 1.2405139744543345,
                "monthAgo": 1.2351072733292254
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.011703141692936958,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.011703141692936958,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x23eE3D14F09946A084350CC6A7153fc6eb918817",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 56623.6685780219,
        "pricePerShare": "1241446625206178737",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0xaA379c2aA72529d5ec0da8A41e2F41ED7Fe4b48C",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-3CryptoUSDC-f",
        "name": "Curve TriCryptoUSDC Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x7F86Bf177Dd4F3494b841a37e810A34dD56c829B",
            "name": "TricryptoUSDC",
            "symbol": "crvUSDCWBTCWETH",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains wBTC, wETH, and USDC. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "806248655641856414785",
            "tvl": 1347750.1443829043,
            "price": 1671.6308733686596
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.041158449266229274,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.04755959853090363,
                "monthAgo": 0.041158449266229274,
                "inception": 0.11651210616667362
            },
            "pricePerShare": {
                "today": 1.1165121061666736,
                "weekAgo": 1.1154946613781542,
                "monthAgo": 1.1127478069208714
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0336164192430246,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0070999999999999995,
                    "boostedAPR": 0.030251576936694002,
                    "baseAPR": 0.012100630774677601,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x0472D09B1EeCea082245b88C22B2A52E8892b018",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1686187211
                }
            },
            {
                "address": "0x9AD3047D578e79187f0FaEEf26729097a4973325",
                "name": "StrategyCurveBoostedFactory-crvUSDCWBTCWETH",
                "details": {
                    "totalDebt": "802368077557574190183",
                    "totalLoss": "0",
                    "totalGain": "14259054857763721174",
                    "performanceFee": 0,
                    "lastReport": 1730263583,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xF36c83f6bF4CF656172F6DbC1220AF6785362f0f",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "412251979143058814546",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xaA379c2aA72529d5ec0da8A41e2F41ED7Fe4b48C",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 55471.30594113695,
        "pricePerShare": "1116512106166673717",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-tricrypto-0/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x5d10DFA44AdC63C41906Af61eEffB9454860e999",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-mkUSD-PayPool-f",
        "name": "Curve mkUSD-PayPool Factory yVault",
        "category": "Prisma",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x9e10f9Fb6F0D32B350CEe2618662243d4f24C64a",
            "name": "mkUSD/Paypool",
            "symbol": "mkUSDPay",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "81518353032433405568660",
            "tvl": 81550.4494378605,
            "price": 1.000393732260689
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.6650965782576527,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 2.850413906818511,
                "monthAgo": 0.6650965782576527,
                "inception": 0.10072746934797429
            },
            "pricePerShare": {
                "today": 1.1007274693479743,
                "weekAgo": 1.0436745094792574,
                "monthAgo": 1.0436745094792574
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "prisma",
                "netAPR": 0.16930931487336187,
                "composite": {
                    "boost": 1.7630954430206212,
                    "poolAPY": 0.0074,
                    "boostedAPR": 0,
                    "baseAPR": 0.0018849672350766955,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.16264931487336187
                }
            }
        },
        "strategies": [
            {
                "address": "0xBDCFd9815E777EFeCDEDeBf17d1A51BD03C2EE5c",
                "name": "StrategyCurveBoostedFactory-mkUSDPay",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495
                }
            },
            {
                "address": "0x8A4bC6702f116DCAa621E7554c950984bc872dFC",
                "name": "StrategyPrismaConvexFactory-mkUSDPay",
                "details": {
                    "totalDebt": "81518353032433405568660",
                    "totalLoss": "0",
                    "totalGain": "4694736944062698182969",
                    "performanceFee": 0,
                    "lastReport": 1730330507,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x3b0EAd3bF2E4275eb8F9b3101AB0104c9bb267f1",
                "name": "StrategyConvexFactory-mkUSDPay",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710601175
                }
            },
            {
                "address": "0x9211c9d84188CC67C35450B4FA04cfDdbed32638",
                "name": "StrategyPrismaConvexFactory-mkUSDPay",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "3566575759202728740905",
                    "performanceFee": 0,
                    "lastReport": 1721755403
                }
            },
            {
                "address": "0x510b3DE542f6f6f1B4c5412419de5Bd46980DF6B",
                "name": "StrategyCurveBoostedFactory-mkUSDPay",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710601175
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x5d10DFA44AdC63C41906Af61eEffB9454860e999",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 54238.92487649473,
        "pricePerShare": "1100727469347974274",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-91/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x849dC56ceCa7Cf55AbF5ec87910DA21c5C7dA581",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ETH+-f",
        "name": "Curve ETH+ Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xe8a5677171c87fCB65b76957f2852515B404C7b1",
            "name": "Curve ETH+-ETH Pool",
            "symbol": "ETH+ETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains ETH+ and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "103595742366017292353",
            "tvl": 514404.8658314316,
            "price": 4965.501999242131
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.10301422052274219,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.2381231704877439,
                "monthAgo": 0.10301422052274219,
                "inception": 0.20338639518210644
            },
            "pricePerShare": {
                "today": 1.2033863951821064,
                "weekAgo": 1.1979158182278684,
                "monthAgo": 1.1932829611460356
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.10413666783376757,
                "composite": {
                    "boost": 2.3897891079663567,
                    "poolAPY": 0.0128,
                    "boostedAPR": 0.10290740870418619,
                    "baseAPR": 0.04306129288193028,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x1149C471E605101B7095344d43BE777474f707Cf",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1686187727
                }
            },
            {
                "address": "0xdBCAa49BbeeEdFd63a12908956c6e3a8B07C3FBa",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "19408419512403845876",
                    "performanceFee": 0,
                    "lastReport": 1719490355
                }
            },
            {
                "address": "0x592b487f078d9b4D22B230F8c5b6509B82ADED5A",
                "name": "StrategyCurveBoostedFactory-ETH+ETH-f",
                "details": {
                    "totalDebt": "102762473707016781247",
                    "totalLoss": "0",
                    "totalGain": "3688463224952403353",
                    "performanceFee": 0,
                    "lastReport": 1730041271,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x849dC56ceCa7Cf55AbF5ec87910DA21c5C7dA581",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 52991.0162867307,
        "pricePerShare": "1203386395182106413",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-256/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x75A291F0232ADD37d72Dd1Dcff55B715755ECDEe",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-CVX-ETH-f",
        "name": "Curve CVX-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x3A283D9c08E8b55966afb64C515f5143cf907611",
            "name": "Curve CVX-ETH Pool",
            "symbol": "crvCVXETH",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains CVX and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2025227884680888022476",
            "tvl": 261125.74681267585,
            "price": 128.93647613084343
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.20126405180028561,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.1916688563743329,
                "monthAgo": 0.20126405180028561,
                "inception": 0.27242073049557924
            },
            "pricePerShare": {
                "today": 1.2724207304955792,
                "weekAgo": 1.2677606438398854,
                "monthAgo": 1.251714554366064
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.1575205725871878,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0196,
                    "boostedAPR": 0.15542285843020864,
                    "baseAPR": 0.06216914337208346,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x8D7686Dfca05a555c1E692C6dF79DFFaF188FD45",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "355150943961750405561",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x0a939d1e278D22a87fB254a50D27cF9F3E14AF7b",
                "name": "StrategyCurveBoostedFactory-crvCVXETH",
                "details": {
                    "totalDebt": "2012609471591259033619",
                    "totalLoss": "0",
                    "totalGain": "118954996456643455847",
                    "performanceFee": 0,
                    "lastReport": 1730398691,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xf6E8c7574636c9ef3f35355dA475D7E340A4eD62",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1671641375
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x75A291F0232ADD37d72Dd1Dcff55B715755ECDEe",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 52555.225832894655,
        "pricePerShare": "1272308528973799273",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/cvxeth/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xfb5137Aa9e079DB4b7C2929229caf503d0f6DA96",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-DOLA-crvUSD-f",
        "name": "Curve DOLA-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x8272E1A3dBef607C04AA6e5BD3a1A134c8ac063B",
            "name": "Curve crvUSD-DOLA Pool",
            "symbol": "crvUSDDOLA-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains DOLA and crvUSD, a dollar pegged stablecoin from [Curve Finance](https://crvusd.curve.fi/#/ethereum/markets).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "240811425933167695568763",
            "tvl": 241309.2021062939,
            "price": 1.0020670787160422
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.1824508719144561,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.5163058773701141,
                "monthAgo": 0.1824508719144561,
                "inception": 0.3303080049948992
            },
            "pricePerShare": {
                "today": 1.3303080049948992,
                "weekAgo": 1.3172647699281446,
                "monthAgo": 1.3106534948918245
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.18601257498785595,
                "composite": {
                    "boost": 2.271015120625632,
                    "poolAPY": 0.0329,
                    "boostedAPR": 0.17378063887539552,
                    "baseAPR": 0.07652112806167555,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x97D4Ee49Ee15E8223F0bac1c925F9Db75918E7b3",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "2146413046745276600937",
                    "performanceFee": 0,
                    "lastReport": 1730397935
                }
            },
            {
                "address": "0xB85887C847597DeC6F45B155FDA30c98a0EF0228",
                "name": "StrategyCurveBoostedFactory-crvUSDDOLA-f",
                "details": {
                    "totalDebt": "239336464781815236784695",
                    "totalLoss": "0",
                    "totalGain": "12201557747813245224583",
                    "performanceFee": 0,
                    "lastReport": 1730422931,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x44fbF9B2dCE6890B75dc988bd1e204e87DceBD93",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "36296286726824286038778",
                    "performanceFee": 0,
                    "lastReport": 1719490355
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xfb5137Aa9e079DB4b7C2929229caf503d0f6DA96",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 44027.07432527503,
        "pricePerShare": "1330060562900196410",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-12/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xBD7c44d61C923eF6Efb09697F9d64e0376A0b9CB",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-mkUSD-USDC-f",
        "name": "Curve mkUSD-USDC Factory yVault",
        "category": "Prisma",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xF980B4A4194694913Af231De69AB4593f5E0fCDc",
            "name": "mkUSD-USDC",
            "symbol": "mkUSDUSDC",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "141666733929234791820765",
            "tvl": 141938.35755183382,
            "price": 1.0019173423080023
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.19542419753530105,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.5166286553287295,
                "monthAgo": 0.19542419753530105,
                "inception": 0.12093322062069589
            },
            "pricePerShare": {
                "today": 1.120933220620696,
                "weekAgo": 1.1099360334339095,
                "monthAgo": 1.1032131215260674
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "prisma",
                "netAPR": 0.00027,
                "composite": {
                    "boost": 1.764237746074228,
                    "poolAPY": 0.0003,
                    "boostedAPR": 0,
                    "baseAPR": 0.05963127261208201,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xE021d0654cfD8a20A696cb6f4b079cf044F64683",
                "name": "StrategyPrismaConvexFactory-mkUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "8765318145263366848460",
                    "performanceFee": 0,
                    "lastReport": 1721755307
                }
            },
            {
                "address": "0xb080943309C2F86Ae7E194D88284cd874B946DB9",
                "name": "StrategyCurveBoostedFactory-mkUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495
                }
            },
            {
                "address": "0x1065Eab88285353798F8db59e9d863BCB830BA43",
                "name": "StrategyCurveBoostedFactory-mkUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702219775
                }
            },
            {
                "address": "0x04c6d9c1d3a88241bB9372B63eC346F07aD2316c",
                "name": "StrategyConvexFactory-mkUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702219775
                }
            },
            {
                "address": "0x0d3FB39f80d85f0834b78E15b54a5C4a1bc4A00E",
                "name": "StrategyPrismaConvexFactory-mkUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702352687
                }
            },
            {
                "address": "0x6B6b735E2f2F0Bc6ec845ba0E32d053E85208C0A",
                "name": "StrategyPrismaConvexFactory-mkUSDUSDC",
                "details": {
                    "totalDebt": "140122449654409491684681",
                    "totalLoss": "0",
                    "totalGain": "8074669806190364577966",
                    "performanceFee": 0,
                    "lastReport": 1729725383,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xBD7c44d61C923eF6Efb09697F9d64e0376A0b9CB",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 27738.18962404576,
        "pricePerShare": "1120933220620695748",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-17/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xe5F625e8f4D2A038AE9583Da254945285E5a77a4",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-DOLA-FRXBP-f",
        "name": "Curve DOLA-FRAXBP Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xE57180685E3348589E9521aa53Af0BCD497E884d",
            "name": "Curve.fi Factory USD Metapool: DOLA/FRAXBP",
            "symbol": "DOLAFRAXBP3CRV-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains Dola, Frax, and USDC.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1335495103947471506173934",
            "tvl": 1343193.3508293172,
            "price": 1.0057643392769402
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.019598376283333746,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.0839930412142875,
                "monthAgo": 0.019598376283333746,
                "inception": 0.6886610374713102
            },
            "pricePerShare": {
                "today": 1.6886610374713102,
                "weekAgo": 1.6859452739202365,
                "monthAgo": 1.6859452739202365
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.12805564209603235,
                "composite": {
                    "boost": 1.7289263012382514,
                    "poolAPY": 0.013300000000000001,
                    "boostedAPR": 0.12898404677336928,
                    "baseAPR": 0.07460355405605856,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x0B971888791759A166CDC19814F7954e6446c41a",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1672938971
                }
            },
            {
                "address": "0xE359DEf55cf9E310AeF759DC0EF7dBfC584F27bF",
                "name": "Convex Frax Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV and veFXS to earn CRV, CVX, and FXS (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1672938971
                }
            },
            {
                "address": "0x337957EbBEAba34f4fC0520F1b1B54fD5FC352Cf",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "10305032622847693860668",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0x9141C81776595426F4Bfd0c589b5472549475eA5",
                "name": "StrategyCurveBoostedFactory-DOLAFRAXBP3CRV-f",
                "details": {
                    "totalDebt": "1334693444498391433544326",
                    "totalLoss": "0",
                    "totalGain": "2537056574639518797850",
                    "performanceFee": 0,
                    "lastReport": 1730422043,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xe5F625e8f4D2A038AE9583Da254945285E5a77a4",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 26324.408710824875,
        "pricePerShare": "1688633218449680208",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-176/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x7cA00559B978CFde81297849be6151d3ccB408A9",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USDC-crvUSD-f",
        "name": "Curve USDC-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x4DEcE678ceceb27446b35C672dC7d61F30bAD69E",
            "name": "Curve crvUSD-USDC Pool",
            "symbol": "crvUSDUSDC-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains USDC and crvUSD, a dollar pegged stablecoin from [Curve Finance](https://crvusd.curve.fi/#/ethereum/markets).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "224776380570063953807364",
            "tvl": 227492.6331330037,
            "price": 1.0120842437094633
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.10824999492230238,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.1236572330035307,
                "monthAgo": 0.10824999492230238,
                "inception": 0.1569454097810783
            },
            "pricePerShare": {
                "today": 1.1569454097810783,
                "weekAgo": 1.1542081951453202,
                "monthAgo": 1.1467425433839413
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.07660507406962022,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.009399999999999999,
                    "boostedAPR": 0.0757167489662447,
                    "baseAPR": 0.03028669958649788,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x567343912E422782ad0287F254F9e2390aF6740a",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "56718444146667597590279",
                    "performanceFee": 0,
                    "lastReport": 1719490487
                }
            },
            {
                "address": "0xB803A6efcdBE8d7089A38b2Af183d05F3b350055",
                "name": "StrategyCurveBoostedFactory-crvUSDUSDC-f",
                "details": {
                    "totalDebt": "224776380570063953807364",
                    "totalLoss": "0",
                    "totalGain": "17357627816665493664169",
                    "performanceFee": 0,
                    "lastReport": 1730540171,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x7F074CD344CD59FA20866796960A5c5A3f97316E",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1686187211
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x7cA00559B978CFde81297849be6151d3ccB408A9",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 24626.076381508847,
        "pricePerShare": "1156907285925597039",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-0/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x790a60024bC3aea28385b60480f15a0771f26D09",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-YFIETH",
        "name": "Curve YFI-ETH Pool yVault",
        "category": "Volatile",
        "version": "0.4.3",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x29059568bB40344487d62f7450E78b8E6C74e0e5",
            "name": "Curve Factory YFI-ETH",
            "symbol": "YFI-ETH",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains YFI and ETH",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "155657024062958503189",
            "tvl": 1071514.1817955282,
            "price": 6883.815158653769
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.02268340144530681,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0.02475341722493362,
                "monthAgo": 0.02268340144530681,
                "inception": 0.07110997919091844
            },
            "pricePerShare": {
                "today": 1.0711099791909184,
                "weekAgo": 1.0706017398461594,
                "monthAgo": 1.0691167295496908
            },
            "extra": {
                "stakingRewardsAPR": 0.3791929002717416,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.03437740160552432,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.003,
                    "boostedAPR": 0.03997175200690539,
                    "baseAPR": 0.015988700802762157,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xa04947059831783C561e59A43B93dCB5bEE7cab2",
                "name": "Curve.fi Factory Crypto Pool: YFI/ETHConvex Strat",
                "details": {
                    "totalDebt": "155657024062958503189",
                    "totalLoss": "0",
                    "totalGain": "14146190994124178570",
                    "performanceFee": 0,
                    "lastReport": 1730459327,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "0x7Fd8Af959B54A677a1D8F92265Bd0714274C56a3",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731472331,
                    "apr": 0.3791929002717416,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0x790a60024bC3aea28385b60480f15a0771f26D09",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 24305.58634000743,
        "pricePerShare": "1071109979190918577",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-8/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x7788A5492bc948e1d8c2caa53b2e0a60ed5403b0",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-OHM-FRAXBP-f",
        "name": "Curve OHM-FRAXBP Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5271045F7B73c17825A7A7aee6917eE46b0B7520",
            "name": "Curve OHM-FRAXBP Pool",
            "symbol": "OHMFRAXBP-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains OHM and Frax's base pool: Frax and USDC. Please be aware that as crypto pools are composed of differently-priced assets, they can be subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "64759697847166943065366",
            "tvl": 522529.50870050327,
            "price": 8.068745316472512
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.03943944946333492,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.1690262119857211,
                "monthAgo": 0.03943944946333492,
                "inception": 0.12248892367952946
            },
            "pricePerShare": {
                "today": 1.1224889236795295,
                "weekAgo": 1.118862022130631,
                "monthAgo": 1.118862022130631
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "fraxcrv",
                "netAPR": 297.33849224717335,
                "composite": {
                    "boost": 1.9219127666260098,
                    "poolAPY": 0.00228,
                    "boostedAPR": 5.563381809888392,
                    "baseAPR": 0.019468373461842603,
                    "cvxAPR": 0.08210262852415479,
                    "rewardsAPR": 0.017103000555838577
                }
            }
        },
        "strategies": [
            {
                "address": "0x83cb8461E0f7f27A5921f7B5f9235211eAA30d59",
                "name": "Convex Frax Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV and veFXS to earn CRV, CVX, and FXS (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1671297558375798971531",
                    "performanceFee": 0,
                    "lastReport": 1707139991
                }
            },
            {
                "address": "0x8c1acaF5FB36838280C671Fb6AB3538DF3213286",
                "name": "Convex Frax Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV and veFXS to earn CRV, CVX, and FXS (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "51669575049616951520809",
                    "totalLoss": "0",
                    "totalGain": "1856673138999495580654",
                    "performanceFee": 0,
                    "lastReport": 1730401595,
                    "debtRatio": 8000
                }
            },
            {
                "address": "0xF7461F158bbc6337F63747c3A861CFBfC039022A",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "4251219235537052240984",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0xfdc58F54320Ee1755D3C77a6A59005aCaaAc1B5f",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "4400894360753960118594",
                    "performanceFee": 0,
                    "lastReport": 1679607623
                }
            },
            {
                "address": "0x6B7cbA100E7BeA38dcc7bBcfE79aB5dBFdac63ac",
                "name": "StrategyCurveBoostedFactory-OHMFRAXBP-f",
                "details": {
                    "totalDebt": "12951939569433388613073",
                    "totalLoss": "0",
                    "totalGain": "110642874726649755644",
                    "performanceFee": 0,
                    "lastReport": 1730403839,
                    "debtRatio": 2000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x7788A5492bc948e1d8c2caa53b2e0a60ed5403b0",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 20608.276151494723,
        "pricePerShare": "1122404482449653187",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-158/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x1fd862499e9b9402DE6c599b6C391f83981180Ab",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysDAI",
        "name": "Spark DAI Lender",
        "category": "Stablecoin",
        "version": "3.0.2",
        "description": "Supplies {{token}} to [Spark Finance](https://spark.fi/) to generate interest.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "name": "Dai Stablecoin",
            "symbol": "DAI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "166546050493047613975790",
            "tvl": 166712.59654354065,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.11795874306677973,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 0.2785369274443325,
                "monthAgo": 0.11795874306677973,
                "inception": 0.0695222147453296
            },
            "pricePerShare": {
                "today": 1.0695222147453296,
                "weekAgo": 1.063839393126181,
                "monthAgo": 1.0592525083500985
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.062439868759949,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.062439868759949,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x1fd862499e9b9402DE6c599b6C391f83981180Ab",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 19665.20834167522,
        "pricePerShare": "1069511486298314436",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                2,
                1
            ]
        }
    },
    {
        "address": "0xbf2e5BeD692C09aF8B39677e315F36aDF39bD685",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "yscrvUSD",
        "name": "Gearbox crvUSD Lender ",
        "category": "Curve",
        "version": "3.0.2",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
            "name": "Curve.Fi USD Stablecoin",
            "symbol": "crvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "493062611223406494851706",
            "tvl": 491899.4765235305,
            "price": 0.997641
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.03723881225372931,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.019288128826860342,
                "monthAgo": 0.03723881225372931,
                "inception": 0.007645903138213227
            },
            "pricePerShare": {
                "today": 1.0076459031382132,
                "weekAgo": 1.0072733033555479,
                "monthAgo": 1.0045711876981422
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.05356798796450013,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.05356798796450013,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xbf2e5BeD692C09aF8B39677e315F36aDF39bD685",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 18317.752253967483,
        "pricePerShare": "1007641007041417464",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                2,
                5,
                3
            ]
        }
    },
    {
        "address": "0x9861708f2ad2BD1ed8D4D12436C0d8EB1ED36f1c",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysWETH",
        "name": "Across WETH Lender",
        "category": "Volatile",
        "version": "3.0.2",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "78344744444178679876",
            "tvl": 192162.4222777926,
            "price": 2452.78
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.08261242725357924,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.22078645096609356,
                "monthAgo": 0.08261242725357924,
                "inception": 0.006790185216822842
            },
            "pricePerShare": {
                "today": 1.0067901852168228,
                "weekAgo": 1.0025451476944962,
                "monthAgo": 1.0000001218752892
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.0638167906003948,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.0638167906003948,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x9861708f2ad2BD1ed8D4D12436C0d8EB1ED36f1c",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 15875.004131295716,
        "pricePerShare": "1006727822597665527",
        "info": {
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xAD2f9A55518Dba12E8AB069502820923351667C5",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-msETH-f",
        "name": "Curve msETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xa4c567c662349BeC3D0fB94C4e7f85bA95E208e4",
            "name": "Curve msETH-WETH Pool",
            "symbol": "msETHWETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains WETH and msETH, a synthetic ETH token from [Metronome](https://metronome.io).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "60548634335023844843",
            "tvl": 151543.86899799434,
            "price": 2502.8453682288105
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.09467675352983823,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.14461415934903898,
                "monthAgo": 0.09467675352983823,
                "inception": 0.15267885206894305
            },
            "pricePerShare": {
                "today": 1.152678852068943,
                "weekAgo": 1.14949082864689,
                "monthAgo": 1.1437783680162226
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.15900615986905792,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0493,
                    "boostedAPR": 0.12737351096561988,
                    "baseAPR": 0.050949404386247954,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x5cC89e5Dd6162a318D394FE14956Be428dc87eCF",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1694033951
                }
            },
            {
                "address": "0x1e27b0d41923F8260964368c7AD519951F1E74d6",
                "name": "StrategyCurveBoostedFactory-msETHWETH-f",
                "details": {
                    "totalDebt": "60216370475644551713",
                    "totalLoss": "0",
                    "totalGain": "3525878230119577663",
                    "performanceFee": 0,
                    "lastReport": 1730430863,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x650994aB0F9AC7fda4d9655F606A3E8eBd402858",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "15589590414626609859",
                    "performanceFee": 0,
                    "lastReport": 1719490463
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xAD2f9A55518Dba12E8AB069502820923351667C5",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 14347.681534081203,
        "pricePerShare": "1152589112765507368",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-331/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x8B2335962111F3CBa6cfC5b2aCD8894635241c3b",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ZUNPXETH-f",
        "name": "Curve ZUNPXETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x17D964DA2bD337CfEaEd30a27c9Ab6580676E730",
            "name": "zunETH/pxETH",
            "symbol": "ZUNPXETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "517405875871417152",
            "tvl": 1238.706380018254,
            "price": 2394.070956252709
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 11.391099753664825,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 11.391099753664825,
                "inception": 0.9566079199270918
            },
            "pricePerShare": {
                "today": 1.9566079199270918,
                "weekAgo": 1.9566079199270918,
                "monthAgo": 1.01051160514809
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.25093612164885193,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0051,
                    "boostedAPR": 0.27371791294316883,
                    "baseAPR": 0.10948716517726753,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x8C3b300b963d0422cBe200c94F61AF1812924bDC",
                "name": "StrategyCurveBoostedFactory-ZUNPXETH",
                "details": {
                    "totalDebt": "517405875871417152",
                    "totalLoss": "0",
                    "totalGain": "1205045745737042747",
                    "performanceFee": 0,
                    "lastReport": 1729831655,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x5e6d44661E97D65A116d34cE8FA5F5594E5eEa2e",
                "name": "StrategyConvexFactory-ZUNPXETH",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1723143251
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x8B2335962111F3CBa6cfC5b2aCD8894635241c3b",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 14110.227940288982,
        "pricePerShare": "1956607919927091649",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-211/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xAc22e3a3cfE4dC82FFD4Ffa7453729Ca963CeB5a",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-GHOcrvUSD-f",
        "name": "Curve GHOcrvUSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x635EF0056A597D13863B73825CcA297236578595",
            "name": "GHO/crvUSD",
            "symbol": "GHOcrvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "3481471901046658199844",
            "tvl": 3483.5133760798735,
            "price": 1.0005863827401857
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 3.910224024380146,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 16.261125193606784,
                "monthAgo": 3.910224024380146,
                "inception": 0.41946350006437605
            },
            "pricePerShare": {
                "today": 1.419463500064376,
                "weekAgo": 1.0820259285386933,
                "monthAgo": 1.0742213517941592
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.1677721830377472,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0015,
                    "boostedAPR": 0.184913536708608,
                    "baseAPR": 0.0739654146834432,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xf13892B6DFea2346dAD34182D5d4cE005e2160FD",
                "name": "StrategyCurveBoostedFactory-GHOcrvUSD",
                "details": {
                    "totalDebt": "1483947178442541893372",
                    "totalLoss": "0",
                    "totalGain": "5404034266165399640454",
                    "performanceFee": 0,
                    "lastReport": 1730271299,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x747AAFf7dc317038F6741722E2Ba710aa7Fffc9D",
                "name": "StrategyCurveBoostedFactory-GHOcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "2130096779294382096023",
                    "performanceFee": 0,
                    "lastReport": 1719490643
                }
            },
            {
                "address": "0xA4946ce5f86C454B29976618ffd2bf59B6F2D709",
                "name": "StrategyConvexFactory-GHOcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1712771903
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xAc22e3a3cfE4dC82FFD4Ffa7453729Ca963CeB5a",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 13621.317692397111,
        "pricePerShare": "1419463500064376020",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-117/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x241AdD131B9aaa7527132b752252b99420937ADc",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USDT-crvUSD-f",
        "name": "Curve USDT-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x390f3595bCa2Df7d23783dFd126427CCeb997BF4",
            "name": "Curve crvUSD-USDT Pool",
            "symbol": "crvUSDUSDT-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains USDT and crvUSD, a dollar pegged stablecoin from [Curve Finance](https://crvusd.curve.fi/#/ethereum/markets).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "118936969511430958456699",
            "tvl": 120370.70774072711,
            "price": 1.0120546053526138
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.10743706615023678,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0.10743706615023678,
                "inception": 0.22394269421535506
            },
            "pricePerShare": {
                "today": 1.223942694215355,
                "weekAgo": 1.223942694215355,
                "monthAgo": 1.2132293407139556
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.10094682089917753,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0086,
                    "boostedAPR": 0.10356313433241948,
                    "baseAPR": 0.04142525373296779,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xB458c556ded7b59B12f3FEa188B01AD06F30c7f3",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "116223407349011784215730",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x61dA32f660f37f21e5f0314b0A6E4ded62c358D2",
                "name": "StrategyCurveBoostedFactory-crvUSDUSDT-f",
                "details": {
                    "totalDebt": "118936969511430958456699",
                    "totalLoss": "0",
                    "totalGain": "20703553247171656065550",
                    "performanceFee": 0,
                    "lastReport": 1730539211,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xa991652B995c4fb3C87d165311bD77e139297cCE",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1686187283
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x241AdD131B9aaa7527132b752252b99420937ADc",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 12932.275690091317,
        "pricePerShare": "1223942694215355031",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-1/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xFfA0F0616229eE2aC08FA4C358D23b18D980134B",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-PRISMAETH-f",
        "name": "Curve PRISMAETH-f Factory yVault",
        "category": "Prisma",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xb34e1a3D07f9D180Bc2FDb9Fd90B8994423e33c1",
            "name": "Curve.fi Factory Crypto Pool: PRISMA/ETH",
            "symbol": "PRISMAETH-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "128772218344179239811",
            "tvl": 2176.700659952468,
            "price": 16.903495862241307
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 5.745683635259363,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 24.62435843682584,
                "monthAgo": 5.745683635259363,
                "inception": 1.2047101660185806
            },
            "pricePerShare": {
                "today": 2.2047101660185806,
                "weekAgo": 1.497512790584223,
                "monthAgo": 1.497512790584223
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "prisma",
                "netAPR": 0.9174463060352833,
                "composite": {
                    "boost": 2.433596426278849,
                    "poolAPY": 0.0076,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.9106063060352834
                }
            }
        },
        "strategies": [
            {
                "address": "0xA7f08D19568c258E5948FaF80570f2633ff352b9",
                "name": "StrategyCurveBoostedFactory-PRISMAETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1701921299
                }
            },
            {
                "address": "0x84de4754C12FfC2a33fA5Dc895AD968984d6f7fD",
                "name": "StrategyPrismaConvexFactory-PRISMAETH-f",
                "details": {
                    "totalDebt": "82876855948656839121",
                    "totalLoss": "0",
                    "totalGain": "45895362395522400690",
                    "performanceFee": 0,
                    "lastReport": 1729726487,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x20570F55bBa2B012eab635504C886873d02c664D",
                "name": "StrategyPrismaConvexFactory-PRISMAETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "509558614108741830314",
                    "performanceFee": 0,
                    "lastReport": 1706710799
                }
            },
            {
                "address": "0xC3d78d594E1147d2634B86ECC03ed4Bf6f36CaA6",
                "name": "StrategyCurveBoostedFactory-PRISMAETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494399
                }
            },
            {
                "address": "0xcc9b5D8A5445987dD0f5461da0C6651f8e2b14a3",
                "name": "StrategyPrismaConvexFactory-PRISMAETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "36651442499568321950",
                    "performanceFee": 0,
                    "lastReport": 1721755367
                }
            },
            {
                "address": "0x9CB89B1f7eb90a0244480eefD460c9833EFc7fDF",
                "name": "StrategyConvexFactory-PRISMAETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1701921299
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xFfA0F0616229eE2aC08FA4C358D23b18D980134B",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 12506.63336074715,
        "pricePerShare": "2204710166018580550",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-333/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x2027D3b2B58F522178cE4cC4E86e99b7C4DE3876",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-sdai-usdm-f",
        "name": "Curve sdai-usdm Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x425BfB93370F14fF525aDb6EaEAcfE1f4e3b5802",
            "name": "sDAI/USDM Rebase Enjoyer Pool",
            "symbol": "sdai-usdm",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "465070623872339286944692",
            "tvl": 491130.6693019335,
            "price": 1.0560345979554873
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.021789573838223723,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0.021789573838223723,
                "inception": 0.031461708178915915
            },
            "pricePerShare": {
                "today": 1.031461708178916,
                "weekAgo": 1.031461708178916,
                "monthAgo": 1.0296177411819327
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.08735195097456827,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0786,
                    "boostedAPR": 0.018457723305075852,
                    "baseAPR": 1.0443912401569833e-10,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.018457723043978042
                }
            }
        },
        "strategies": [
            {
                "address": "0xa0b931553BB6670E5Bd889cac7691B2B4CCfFff0",
                "name": "StrategyCurveBoostedFactory-sdai-usdm",
                "details": {
                    "totalDebt": "465070623872339286944692",
                    "totalLoss": "0",
                    "totalGain": "5801546938002697113533",
                    "performanceFee": 0,
                    "lastReport": 1730404835,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x776067440FDc58Ceaca3FB016fEc8c954590FBb7",
                "name": "StrategyCurveBoostedFactory-sdai-usdm",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "18761019020730784062660",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0xE228772C0a7Dc539E6c763A67C0e0de70f50955D",
                "name": "StrategyConvexFactory-sdai-usdm",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702316351
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x2027D3b2B58F522178cE4cC4E86e99b7C4DE3876",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 10701.527982970716,
        "pricePerShare": "1031461708178915892",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-23/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xe92ade9eE76681f96C8BB0b352d5410ca5b35D70",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysWETH",
        "name": "StrategyGearboxLenderWETH",
        "category": "Volatile",
        "version": "3.0.2",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "19913688161388585433",
            "tvl": 48843.8960484907,
            "price": 2452.78
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.21220661114216513,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.1430797724942305,
                "monthAgo": 0.21220661114216513,
                "inception": 0.03301293781325754
            },
            "pricePerShare": {
                "today": 1.0330129378132575,
                "weekAgo": 1.0301861116178084,
                "monthAgo": 1.015304365322065
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.04005555977744657,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.04005555977744657,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xe92ade9eE76681f96C8BB0b352d5410ca5b35D70",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 10364.997655430401,
        "pricePerShare": "1033008328875932251",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                2,
                5,
                3
            ]
        }
    },
    {
        "address": "0x378cb52b00F9D0921cb46dFc099CFf73b42419dC",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvLUSD",
        "name": "LUSD yVault",
        "category": "Stablecoin",
        "version": "0.4.3",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
            "name": "Liquity LUSD",
            "symbol": "LUSD",
            "description": "Liquity is a decentralized borrowing protocol that allows you to borrow LUSD (a USD pegged stablecoin) interest free using Ether as collateral. The loans are secured by a Stability Pool containing LUSD and by borrowers collectively acting as guarantors of last resort.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "48800501039320719873451",
            "tvl": 48626.13684910722,
            "price": 0.996427
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0.043175174924366115,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0.09224509486133513,
                "monthAgo": 0.043175174924366115,
                "inception": 0.15493603727245975
            },
            "pricePerShare": {
                "today": 1.1549360372724597,
                "weekAgo": 1.1528964665670722,
                "monthAgo": 1.150852072379005
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x961082DE19e9cF87bB4850f6f347407BE89D9ebb",
                "name": "Aave Lender Optimizer",
                "description": "Supplies {{token}} to [AAVE](https://app.aave.com/home) to generate interest and earn stkAAVE tokens. Once unlocked, earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "2248754239626873243280",
                    "performanceFee": 0,
                    "lastReport": 1679827379
                }
            },
            {
                "address": "0xFf72f7C5f64ec2fd79B57d1A69C3311C1bB3EEF1",
                "name": "StrategyLiquityStabilityPoolLUSD",
                "details": {
                    "totalDebt": "48692776380642760364569",
                    "totalLoss": "0",
                    "totalGain": "33712075874872056407402",
                    "performanceFee": 0,
                    "lastReport": 1730007827,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x24788D1468eEbb6a57ab8AB94a307F8B31bb2e81",
                "name": "Tokemak Reinvest",
                "description": "Supplies {{token}} to [Tokemak](https://www.tokemak.xyz) to earn TOKE. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "2180489177028642949010",
                    "performanceFee": 0,
                    "lastReport": 1660778093
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x378cb52b00F9D0921cb46dFc099CFf73b42419dC",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 2099.441964356369,
        "pricePerShare": "1154936037272459885",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x459F99D7c83Bc3653b1913B62D2978b1deDa01B5",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDC",
        "name": "sUSDC",
        "category": "Stablecoin",
        "version": "3.0.2",
        "description": "Invests the USDC through MakerDAO's Peg Stability Module (PSM) into sDAI to benefit from the Dai Savings Rate.",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "name": "USD Coin",
            "symbol": "USDC",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "912290891",
            "tvl": 913.2031818909999,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 1.8723040783693172,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 7.774049305802957,
                "monthAgo": 1.8723040783693172,
                "inception": 0.1579520000000001
            },
            "pricePerShare": {
                "today": 1.157952,
                "weekAgo": 1.007711,
                "monthAgo": 1.003522
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.05650990566476621,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.05650990566476621,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x459F99D7c83Bc3653b1913B62D2978b1deDa01B5",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 1709.7940418343564,
        "pricePerShare": "1157942",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x5f76526390d9cd9944d65C605C5006480FA1bFcB",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysWETH",
        "name": "Sturdy Swell Compounder",
        "category": "Volatile",
        "version": "3.0.2",
        "description": "Supplies {{token}} to the corresponding [Sturdy](https://v2.sturdy.finance/aggregators) aggregator earning the underlying yield and compounding the rewards",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "4317675112001889139",
            "tvl": 10590.307161215995,
            "price": 2452.78
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.1241561525885549,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0.1241561525885549,
                "inception": 0.07410687433254726
            },
            "pricePerShare": {
                "today": 1.0741068743325473,
                "weekAgo": 1.0741068743325473,
                "monthAgo": 1.0632567482712452
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x5f76526390d9cd9944d65C605C5006480FA1bFcB",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 1314.8517918675989,
        "pricePerShare": "1074106874332547347",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                1,
                1,
                1,
                1,
                1,
                1,
                5,
                2,
                3,
                5,
                1
            ]
        }
    },
    {
        "address": "0xf6E2d36c489e5B361CdC962D4568ceA663AD5ddC",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDC",
        "name": "StrategyGearboxLenderUSDC",
        "category": "Stablecoin",
        "version": "3.0.2",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "name": "USD Coin",
            "symbol": "USDC",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "13049561236",
            "tvl": 13062.610797235999,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.05398655101980666,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.04459573522356235,
                "monthAgo": 0.05398655101980666,
                "inception": 0.034486999999999934
            },
            "pricePerShare": {
                "today": 1.034487,
                "weekAgo": 1.033603,
                "monthAgo": 1.029917
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.0750923930847136,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.0750923930847136,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xf6E2d36c489e5B361CdC962D4568ceA663AD5ddC",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 705.2053042568585,
        "pricePerShare": "1034480",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                2,
                5,
                3
            ]
        }
    },
    {
        "address": "0x6164045FC2b2b269ffcaB2197736A74B1725B6C6",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysDAI",
        "name": "StrategyGearboxLenderDAI",
        "category": "Stablecoin",
        "version": "3.0.2",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "name": "Dai Stablecoin",
            "symbol": "DAI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "239869519630995113121",
            "tvl": 240.10938915062607,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0.03818960581360326,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.04758054057387813,
                "monthAgo": 0.03818960581360326,
                "inception": 1.4650125175166075
            },
            "pricePerShare": {
                "today": 2.4650125175166075,
                "weekAgo": 2.4627652355754934,
                "monthAgo": 2.457299370039253
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.06969697289668342,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.06969697289668342,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x6164045FC2b2b269ffcaB2197736A74B1725B6C6",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 9.169682923807478,
        "pricePerShare": "2464999715942931470",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                2,
                5,
                3
            ]
        }
    },
    {
        "address": "0x79F4a9ed7a6196c67a2D6BCE8eC55E9F18802018",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-oETH-f",
        "name": "Curve oETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x94B17476A93b3262d87B9a326965D1E91f9c13E7",
            "name": "Curve oETH Pool",
            "symbol": "OETHCRV-f",
            "description": "This token represents a curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This curve pool contains ETH and OETH. OETH is Origin Protocol's Ethereum liquid staking derivative aggregator.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "9953107079870766010",
            "tvl": 24431.460877480655,
            "price": 2454.656689757816
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.060940775661723956
            },
            "pricePerShare": {
                "today": 1.060940775661724,
                "weekAgo": 1.060940775661724,
                "monthAgo": 1.060940775661724
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.07429743959282506,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0009,
                    "boostedAPR": 0.0816527106586945,
                    "baseAPR": 0.0326610842634778,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xe05d8F0Da4fAE4B16DB394e4A7865E8dbb9E160A",
                "name": "StrategyCurveBoostedFactory-OETHCRV-f",
                "details": {
                    "totalDebt": "9953107079870766010",
                    "totalLoss": "0",
                    "totalGain": "245174972081501174",
                    "performanceFee": 0,
                    "lastReport": 1730596235,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xDF9D0CB53EC4Deb93c9Fd73FD35339D625903C57",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1685747927
                }
            },
            {
                "address": "0xba687079661FEDa03AB38BAc2044EC004Eb3B3dF",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "681475304098053778",
                    "performanceFee": 0,
                    "lastReport": 1719321443
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x79F4a9ed7a6196c67a2D6BCE8eC55E9F18802018",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1060940775661724066",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-298/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xdADbB5472474E612A6fA9d82d3395DEA5829a52a",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-frxETH-f",
        "name": "Curve frxETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xf43211935C781D5ca1a41d2041F397B8A7366C7A",
            "name": "Curve frxETH Pool",
            "symbol": "frxETHCRV",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains ETH and frxETH. Frax Ether is Frax Finance's loosely-pegged stablecoin to Ether.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2447.592781033209
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "fraxcrv",
                "netAPR": 0.012413609238098443,
                "composite": {
                    "boost": 1.9141550950689021,
                    "poolAPY": 0.00198,
                    "boostedAPR": 0.00863041960713821,
                    "baseAPR": 0.017176943635668795,
                    "cvxAPR": 6.199252246208667e-7,
                    "rewardsAPR": 0.0028641975434624545
                }
            }
        },
        "strategies": [
            {
                "address": "0xB77eeb430Ee466Bb642B10A450AB4d885601948B",
                "name": "StrategyCurveBoostedFactory-frxETHCRV",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494255,
                    "debtRatio": 2000
                }
            },
            {
                "address": "0xa1FbA42134C00FF78F9DA7efBe0E530A2C77C7B2",
                "name": "Convex Frax Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV and veFXS to earn CRV, CVX, and FXS (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1717242755,
                    "debtRatio": 8000
                }
            },
            {
                "address": "0x6D0c603D47561e77AEdB841879555B71be664d8a",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719057203
                }
            },
            {
                "address": "0xEF78A02A5dd8507f743e0f6C86f650fB2320817D",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1685706719
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xdADbB5472474E612A6fA9d82d3395DEA5829a52a",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/frxeth/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xFCa9Ab2996e7b010516adCC575eB63de4f4fa47A",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-upYFI-f",
        "name": "Curve upYFI Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x13120b7599DdF33782c748A847cc1d3c96387Ecd",
            "name": "YFI/upYFI",
            "symbol": "upYFI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2718543290411433980798244",
            "tvl": 172130.04268467656,
            "price": 0.06331701367118042
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": 0.8251581244865298,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0000014566175903942735,
                "composite": {
                    "boost": 1.1523923184147853,
                    "poolAPY": 0,
                    "boostedAPR": 0.0000016184639893269706,
                    "baseAPR": 0.0000014044383700451135,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x21C3126dC2b665DDF13c8faA72C2328AD2587Eb7",
                "name": "StrategyCurveBoostedFactory-upYFI",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719490415
                }
            },
            {
                "address": "0xC490403dDd331049285E165Ad01625CE710f4F17",
                "name": "StrategyConvexFactory-upYFI",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1716961763
                }
            },
            {
                "address": "0x58bEf4D2361016cF2ee9ec9C0353af6FB941acD3",
                "name": "StrategyCurveBoostedFactory-upYFI",
                "details": {
                    "totalDebt": "2718543290411433980798244",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1728900443,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "0xf719B2d3925CC445D2Bb67FA12963265E224Fa11",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731542400,
                    "apr": 0.8251581244865298,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0xFCa9Ab2996e7b010516adCC575eB63de4f4fa47A",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-156/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xAbD64D5AB5A4b129df4f6f37A8d461c2510b5503",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-3Crv-f",
        "name": "Curve 3Crv Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
            "name": "Curve 3pool",
            "symbol": "3crv",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains DAI, USDC, and USDT. It is also known as 3Crv (or 3pool), and is the basis for all of Curve's stablecoin metapools.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "163617990882378865872112",
            "tvl": 169503.22325774792,
            "price": 1.0359693475248686
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.025873346741356332
            },
            "pricePerShare": {
                "today": 1.0258733467413563,
                "weekAgo": 1.0258733467413563,
                "monthAgo": 1.0258733467413563
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.01512590908588547,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.0064,
                    "boostedAPR": 0.010406565650983855,
                    "baseAPR": 0.004162626260393543,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xb60362fA811c576D4C220C0834ebDA9bfE68888C",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1678965731
                }
            },
            {
                "address": "0x5D2CF3986f5589eB44D71c1fdf6436096DE8BF4c",
                "name": "StrategyCurveBoostedFactory-3Crv",
                "details": {
                    "totalDebt": "163617990882378865872112",
                    "totalLoss": "0",
                    "totalGain": "1740047081954995348259",
                    "performanceFee": 0,
                    "lastReport": 1730403683,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xe5B3b12B6c93B725484736628A22dBcd130574D7",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "16693078430843463806374",
                    "performanceFee": 0,
                    "lastReport": 1719492875
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xAbD64D5AB5A4b129df4f6f37A8d461c2510b5503",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1025873346741356340",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/3pool/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xb0154f71912866Bb69fE26fFc44779D99B9CAE85",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "yscrvUSD",
        "name": "Aave V3 crvUSD Lender",
        "category": "Curve",
        "version": "3.0.3",
        "description": "Supplies {{token}} to [Aave V3](https://app.aave.com/) to generate interest and earn any applicable rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
            "name": "Curve.Fi USD Stablecoin",
            "symbol": "crvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "20828753412530342092",
            "tvl": 20.779618383230183,
            "price": 0.997641
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 23.908981319796833,
                "monthAgo": 0,
                "inception": 0.4611438554201923
            },
            "pricePerShare": {
                "today": 1.4611438554201923,
                "weekAgo": 1.0017932091904864,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.03717268899209136,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.03717268899209136,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xb0154f71912866Bb69fE26fFc44779D99B9CAE85",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1461134988902296453",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0x7bDeb15b00437fc8b5DbBf8Ba7B0FC6CB7F7e68c",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-CADCUSDC-f",
        "name": "Curve CADCUSDC-f Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x1054Ff2ffA34c055a13DCD9E0b4c0cA5b3aecEB9",
            "name": "Curve.fi Factory Crypto Pool: CADC/USDC",
            "symbol": "CADCUSDC-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.728113
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 17.079980997837563,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 18.977756664263957,
                    "baseAPR": 7.5911026657055825,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x85D78B683C26c43A7cB9aBffE25fB436fa28484F",
                "name": "StrategyCurveBoostedFactory-CADCUSDC-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1724509679,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xa98dAcf114cBfA5162fF6Be7D9507c5672CecC6a",
                "name": "StrategyConvexFactory-CADCUSDC-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1724509679
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x7bDeb15b00437fc8b5DbBf8Ba7B0FC6CB7F7e68c",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-12/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xfa6dCB142e12b4f2CB15CABb344a618B7e8d6A62",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-MKULTRA-f",
        "name": "Curve MKULTRA Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC236BAE6e35b3Fb7335e1c35CA0862Ce92bd5DE3",
            "name": "mkUSD/ULTRA",
            "symbol": "MKULTRA",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "49754996297416974226",
            "tvl": 50.63851424586262,
            "price": 1.0177573714037542
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.5180244902874418,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0.5755827669860464,
                    "baseAPR": 0.23023310679441855,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x097a88057DB8863903eB4C1A54DFE4cA7385eac6",
                "name": "StrategyConvexFactory-MKULTRA",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1724744135
                }
            },
            {
                "address": "0x477AC141085977171F1dbd585D825F4595a67195",
                "name": "StrategyCurveBoostedFactory-MKULTRA",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1724744135,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xfa6dCB142e12b4f2CB15CABb344a618B7e8d6A62",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-101/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x671a912C10bba0CFA74Cfc2d6Fba9BA1ed9530B2",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvLINK",
        "name": "LINK yVault",
        "category": "Volatile",
        "version": "0.4.2",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
            "name": "ChainLink Token",
            "symbol": "LINK",
            "description": "Through a decentralized oracle network, Chainlink allows blockchains to securely interact with external data feeds, events and payment methods, providing the critical off-chain information needed by complex smart contracts to become the dominant form of digital agreement. The Chainlink Network is driven by a large open-source community of data providers, node operators, smart contract developers, researchers, security auditors and more.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "27720994873131650326681",
            "tvl": 304653.7336557169,
            "price": 10.99
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.023757080902174543
            },
            "pricePerShare": {
                "today": 1.0237570809021745,
                "weekAgo": 1.0237570809021745,
                "monthAgo": 1.0237570809021745
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x136fe75bfDf142a917C954F58577DB04ef6F294B",
                "name": "Maker Delegate",
                "description": "Stakes {{token}} in [MakerDAO](https://oasis.app/borrow) vault and mints DAI. This newly minted DAI is then deposited into the DAI yVault to generate yield.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1127473236478319415",
                    "performanceFee": 0,
                    "lastReport": 1624475947
                }
            },
            {
                "address": "0xb8cB98701153C16df52f33e7E084c816bE60D8D9",
                "name": "Aave Lender Optimizer",
                "description": "Supplies {{token}} to [AAVE](https://app.aave.com/home) to generate interest and earn stkAAVE tokens. Once unlocked, earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1214745855759339404899",
                    "performanceFee": 0,
                    "lastReport": 1709149703
                }
            },
            {
                "address": "0x17304367C7680a62F23B667ce5ef7e80aE296205",
                "name": "Compound Lender Borrower",
                "description": "Supplies {{token}} on [Compound Finance](https://app.compound.finance/?market=usdc-mainnet) version 3 and borrows USDC which it also deposits to earn COMP. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "806781508272159286957",
                    "performanceFee": 0,
                    "lastReport": 1704350567
                }
            },
            {
                "address": "0x8198815871a45A5a883d083B7B105927eb9919D8",
                "name": "Vesper LINK",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "462008601235554529",
                    "performanceFee": 0,
                    "lastReport": 1626661653
                }
            },
            {
                "address": "0xf6D87dFC0841A289614B3d6fdb78D956ebd3cfF0",
                "name": "League Dao Reinvest",
                "description": "Supplies {{token}} to [League Dao](https://dao.leaguedao.com/yield-farming) to earn LEAG. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "7958753838923201598119",
                    "performanceFee": 0,
                    "lastReport": 1646363963
                }
            },
            {
                "address": "0x906f0a6f23e7160eB0927B0903ab80b5E3f3950D",
                "name": "AaveLenderLINKBorrowerSUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "828677623166614266846",
                    "performanceFee": 0,
                    "lastReport": 1632176303
                }
            },
            {
                "address": "0xF864f92e88054AA05639324090b411C1D55B4a5B",
                "name": "88 MPH Reinvest",
                "description": "Supplies {{token}} to [88 MPH](https://88mph.app/earn) to earn a fixed-rate yield and MPH tokens. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1257139851961538529174",
                    "performanceFee": 0,
                    "lastReport": 1663106446
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x671a912C10bba0CFA74Cfc2d6Fba9BA1ed9530B2",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1023757080902174538",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xC08d81aba10f2dcBA50F9A3Efbc0988439223978",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDS",
        "name": "Aave V3 Lido USDS Lender",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Supplies {{token}} to [Aave V3](https://app.aave.com/) to generate interest and earn any applicable rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
            "name": "USDS Stablecoin",
            "symbol": "USDS",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.999993
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.019663345597280335,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.019663345597280335,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xC08d81aba10f2dcBA50F9A3Efbc0988439223978",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0x4907fd39d4691F03b3751590b8df6ed01E3c2b63",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-pxETH-mkUSD-f",
        "name": "Curve pxETH-mkUSD Factory yVault",
        "category": "Prisma",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6ade6971Ca3d90990C30d39c78b0534C7166e07b",
            "name": "Curve.fi Factory Crypto Pool: pxETH/mkUSD",
            "symbol": "pxETHmkUSD-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 99.23019475291696
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "prisma",
                "netAPR": 0.46964563679080906,
                "composite": {
                    "boost": 1.7631260979111338,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.46964563679080906
                }
            }
        },
        "strategies": [
            {
                "address": "0x213f7da1064D7d7EE393D204570B68B62DDcE6b8",
                "name": "StrategyPrismaConvexFactory-pxETHmkUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710767015,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x586b19eA68630c68FDA4F0758143406716437921",
                "name": "StrategyCurveBoostedFactory-pxETHmkUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495
                }
            },
            {
                "address": "0xcC5d403E9EB5f3Ff93C7CFdD9b1DD78De3ecfff2",
                "name": "StrategyConvexFactory-pxETHmkUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710722699
                }
            },
            {
                "address": "0x7F491558f25782EfD41199Ec8b9AD871c14b51aA",
                "name": "StrategyPrismaConvexFactory-pxETHmkUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710767015
                }
            },
            {
                "address": "0x48DB90EA31173FC8838527fB7715EF881a5B0Ea0",
                "name": "StrategyCurveBoostedFactory-pxETHmkUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710722699
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x4907fd39d4691F03b3751590b8df6ed01E3c2b63",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-364/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x6d765CbE5bC922694afE112C140b8878b9FB0390",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvSUSHI",
        "name": "SUSHI yVault",
        "category": "Volatile",
        "version": "0.4.3",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
            "name": "SushiToken",
            "symbol": "SUSHI",
            "description": "Sushi began as a fork of the automated market-maker (AMM) Uniswap, but has since evolved into much more than just a fork. Sushi offers swaps, lending, a token launchpad, and more all on one decentralized, community-driven platform across more than 10 different chains. SUSHI tokens are used for protocol governance and can be staked for protocol fees.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "69000116709988949748267",
            "tvl": 43657.684844627496,
            "price": 0.632719
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.14264301654856393
            },
            "pricePerShare": {
                "today": 1.142643016548564,
                "weekAgo": 1.142643016548564,
                "monthAgo": 1.142643016548564
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0xb6abbD5594B344F17aF8D9a83869C3660eA9a6bd",
                "name": "Sushi Staking",
                "description": "Stakes {{token}} on [Sushi](https://app.sushi.com/bar) to collect crosschain and protocol-wide swap fees. Rewards are harvested and deposited back into the strategy.",
                "details": {
                    "totalDebt": "68058171649215248547870",
                    "totalLoss": "78",
                    "totalGain": "7337298549412619083034",
                    "performanceFee": 0,
                    "lastReport": 1719468215,
                    "debtRatio": 9900
                }
            },
            {
                "address": "0xE8356C2EA2767fCBd3C1b7DD8cEBD2Fc12dDe13c",
                "name": "Tokemak Reinvest",
                "description": "Supplies {{token}} to [Tokemak](https://www.tokemak.xyz) to earn TOKE. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1236532312691976399460",
                    "performanceFee": 0,
                    "lastReport": 1655346748
                }
            },
            {
                "address": "0x79Be3edA1d7FE92c18B9539bce2611bf8dc9BFc5",
                "name": "StrategyLenderYieldOptimiser",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "75346763152785968850",
                    "performanceFee": 1000,
                    "lastReport": 1667722967
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x6d765CbE5bC922694afE112C140b8878b9FB0390",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1142643016548563972",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xb41c14954E4002D29BbBaC86B52143328DB2eE47",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USD3ETH+-f",
        "name": "Curve USD3ETH+ Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x06A2e1521aFDe7f7Dc30d351DCF04408042F536E",
            "name": "USD3/ETH+",
            "symbol": "USD3ETH+",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 101.506025
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.032580000000000005,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0362,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xb4F8feC7fC3BA6FA1bbA61539BcCC58682Bcbe02",
                "name": "StrategyCurveBoostedFactory-USD3ETH+",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719934739,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x90E320eB637f29DB3FC17a0f7afe3Fd48CD30b33",
                "name": "StrategyConvexFactory-USD3ETH+",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719934739
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xb41c14954E4002D29BbBaC86B52143328DB2eE47",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-twocrypto-33/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xDb26d8815EdA864Dfa43306766f2F8CA50C03F9E",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-msUSD-FRAXBP-f",
        "name": "Curve msUSD-FRAXBP Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xc3b19502F8c02be75F3f77fd673503520DEB51dD",
            "name": "Curve msUSD-FRAXBP Pool",
            "symbol": "msUSDFRAX3CRV-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Curve factory liqudity pool contains msUSD, FRAX, and USDC.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2771498278758374884837",
            "tvl": 2874.162889498421,
            "price": 1.037043
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 2.3675424416203357
            },
            "pricePerShare": {
                "today": 3.3675424416203357,
                "weekAgo": 3.3675424416203357,
                "monthAgo": 3.3675424416203357
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.3292648703810962,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0583,
                    "boostedAPR": 0.30754985597899576,
                    "baseAPR": 0.1230199423915983,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x89dc05b7aE9a9D6F116eedD6F8CA06961A1574e0",
                "name": "Convex Frax Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV and veFXS to earn CRV, CVX, and FXS (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1676341415
                }
            },
            {
                "address": "0xB320B6F94B6D671e028E5eD2Be06702990E8dcf8",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1676272355
                }
            },
            {
                "address": "0xa78d68C30BCB3D3Bbc369bA652adBfA4Ea1bE52E",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "8851750844318317876599",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0xAE8a4092C8e21290fe8C5241A90517d6921c33dA",
                "name": "StrategyCurveBoostedFactory-msUSDFRAX3CRV-f",
                "details": {
                    "totalDebt": "2771498278758374884837",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730403623,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xDb26d8815EdA864Dfa43306766f2F8CA50C03F9E",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "3367542441620335805",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-251/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xF5f33812c93C5f2Ae2F28c041eEb393212439502",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-GUSD-crvUSD-f",
        "name": "Curve GUSD-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xeCDd0cE505da71cd9dE855CD6804BA1e8C7bdB07",
            "name": "Curve.fi Factory Plain Pool: crvUSD/GUSD",
            "symbol": "crvUSDGUSD-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "682818221586284830577",
            "tvl": 683.4333505631772,
            "price": 1.0009008678407312
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 2.1288398602625107
            },
            "pricePerShare": {
                "today": 3.1288398602625107,
                "weekAgo": 3.1288398602625107,
                "monthAgo": 3.1288398602625107
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 1.1530660545822808,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xE47E864e4eEdC4d63703a2ab3a8a8F5E17516726",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "2192801862478667067270",
                    "performanceFee": 0,
                    "lastReport": 1719321215
                }
            },
            {
                "address": "0x81193C7A55F450EDBfa85Ee3008e9A24F79ee158",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1694361167
                }
            },
            {
                "address": "0x90ae9201932aC5C5CBb6F339355dF2e4Ab075E56",
                "name": "StrategyCurveBoostedFactory-crvUSDGUSD-f",
                "details": {
                    "totalDebt": "682818221586284830577",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279055,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xF5f33812c93C5f2Ae2F28c041eEb393212439502",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "3128839860262510622",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-13/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x133dAa2Fa268b36E088b2BE1358857D41a8369eb",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-mkUSD-FRAXBP-f",
        "name": "Curve mkUSD-FRAXBP Factory yVault",
        "category": "Prisma",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x0CFe5C777A7438C9Dd8Add53ed671cEc7A5FAeE5",
            "name": "Curve.fi Factory USD Metapool: Prisma mkUSD",
            "symbol": "mkUSD3CRV-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.0077959618822903
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "prisma",
                "netAPR": 0.15556794029663132,
                "composite": {
                    "boost": 1.7631395883228889,
                    "poolAPY": 0.0036,
                    "boostedAPR": 0,
                    "baseAPR": 0.0109314285823634,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.15232794029663133
                }
            }
        },
        "strategies": [
            {
                "address": "0x28964aB13868B15BE20100124314CF92bBB225c9",
                "name": "StrategyPrismaConvexFactory-mkUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1704186359,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xDf6f22653920B0a790F9cc59b82255eA358f3D13",
                "name": "StrategyPrismaConvexFactory-mkUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1704186359
                }
            },
            {
                "address": "0x29B7D900c4523beC9C141B80A8f073d70de904ea",
                "name": "StrategyCurveBoostedFactory-mkUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702218131
                }
            },
            {
                "address": "0x93E03b0e1ce816fD308461367C1A85501A4cd2f0",
                "name": "StrategyConvexFraxFactory-mkUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702218131
                }
            },
            {
                "address": "0x438BFB9525a87eA10119e85CABDd766099A5d618",
                "name": "StrategyConvexFactory-mkUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702218131
                }
            },
            {
                "address": "0x43Ced117186fbdb7bee39cc14bBdF23627CE9f43",
                "name": "StrategyCurveBoostedFactory-mkUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495
                }
            },
            {
                "address": "0x17DBab0acD8bEabBB451B110cE9fDa8eBB7eC2BF",
                "name": "StrategyPrismaConvexFactory-mkUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1704186359
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x133dAa2Fa268b36E088b2BE1358857D41a8369eb",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-342/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xE2CaD35CFD1A9B5acD557558f44B096ef8340C1B",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-TriCryptoLLAMA-f",
        "name": "Curve TriCryptoLLAMA Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x2889302a794dA87fBF1D6Db415C1492194663D13",
            "name": "TricryptoLLAMA",
            "symbol": "crvCRVUSDTBTCWSTETH",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains crvUSD, tBTC, and wstETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2680942882141225819",
            "tvl": 4722.8883811331525,
            "price": 1761.6519966143621
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.5401706896591558
            },
            "pricePerShare": {
                "today": 1.5401706896591558,
                "weekAgo": 1.5401706896591558,
                "monthAgo": 1.5401706896591558
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.06309891681096139,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0165,
                    "boostedAPR": 0.05360990756773487,
                    "baseAPR": 0.02144396302709395,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xDe2b8a0cBa4F6996B526a4bc784532D7Aeba4E33",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "56607593504834513508",
                    "performanceFee": 0,
                    "lastReport": 1719490403
                }
            },
            {
                "address": "0x3F3A9fa43196eC62E5F5d1aB1A6d73ED640E61EE",
                "name": "StrategyCurveBoostedFactory-crvCRVUSDTBTCWSTETH",
                "details": {
                    "totalDebt": "2680942882141225819",
                    "totalLoss": "0",
                    "totalGain": "594102684289376709",
                    "performanceFee": 0,
                    "lastReport": 1730398727,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xc771d3FE9699a5AaC0e6be661c5EEE3Ed1F9a285",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1689789695
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xE2CaD35CFD1A9B5acD557558f44B096ef8340C1B",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1540170689659155755",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-tricrypto-2/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xc688c419f2407670463068CE540528B9a710AE7F",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ankrETH-frxETH-f",
        "name": "Curve ankrETH-frxETH Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xa8e14F03124Ea156A4fc416537c82ff91a647D50",
            "name": "Curve frxETH-ankrETH Pool",
            "symbol": "ankrfrxETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains frxETH and ankrETH. ankrETH is ANKR's liquid staking derivative for Ether. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 5435.044602886328
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.01098,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.012199999999999999,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xd73F4bdA58E7eA48c4BF630AD500D5f21BcBed26",
                "name": "StrategyCurveBoostedFactory-ankrfrxETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xD292399F713B1B2c0C90D1554F2b4f107A448E53",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719056831
                }
            },
            {
                "address": "0x8BBBA8c1047828Ddf4A72AEeEbc8B60Ac54eD548",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1685706299
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xc688c419f2407670463068CE540528B9a710AE7F",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-219/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x2D59aa422A7AaE58038CF8aE6eD07330Cc7d3ae8",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-bLUSD-f",
        "name": "Curve bLUSD Factory yVault",
        "category": "Volatile",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5ca0313D44551e32e0d7a298EC024321c4BC59B4",
            "name": "Curve bLUSD Pool",
            "symbol": "bLUSDLUSD3-f",
            "description": "This token represents a v2 Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains bLUSD along with LUSD3CRV-f, the base LUSD pool composed of LUSD, DAI, USDC, and USDT. For more info regarding bLUSD, check [here](https://www.chickenbonds.org/lusd-bonds). Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "63992827060702038326",
            "tvl": 146.8946106138489,
            "price": 2.295485562381988
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.019453707294794675
            },
            "pricePerShare": {
                "today": 1.0194537072947947,
                "weekAgo": 1.0194537072947947,
                "monthAgo": 1.0194537072947947
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0853495864462146,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0003,
                    "boostedAPR": 0.09453287382912734,
                    "baseAPR": 0.037813149531650936,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xBf610fC26d57AEA5e86238A89fafC26729FBd6e0",
                "name": "StrategyCurveBoostedFactory-bLUSDLUSD3-f",
                "details": {
                    "totalDebt": "63992827060702038326",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729274279,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xc8EF2183B3Bfa1c4A484dcf9292535b3A4e7Def9",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "627716850728929460224",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0xf19Fe51EF5b156d757B4D403AFa1141DaaC763cC",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1673289287
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x2D59aa422A7AaE58038CF8aE6eD07330Cc7d3ae8",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1019453707294794687",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-134/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xA76436957378bF3812dba0A98E864686086fd0e6",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-FXScrvUSD-f",
        "name": "Curve FXScrvUSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xfb8b95Fb2296a0Ad4b6b1419fdAA5AA5F13e4009",
            "name": "FXS/crvUSD",
            "symbol": "FXScrvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2200633127153276704669",
            "tvl": 5815.014599503772,
            "price": 2.6424280029929537
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.11659953505552578
            },
            "pricePerShare": {
                "today": 1.1165995350555258,
                "weekAgo": 1.1165995350555258,
                "monthAgo": 1.1165995350555258
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0035433788898954393,
                "composite": {
                    "boost": 1.4622170207074103,
                    "poolAPY": 0.002,
                    "boostedAPR": 0.001937087655439377,
                    "baseAPR": 0.0013247607078887835,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xF4d0434F30DeFC12d12C2bB633029c5d6354032c",
                "name": "StrategyCurveBoostedFactory-FXScrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "187803561992208678340",
                    "performanceFee": 0,
                    "lastReport": 1719321095
                }
            },
            {
                "address": "0x0C46D410473d12e9483Ba298228592DAd9Ec721a",
                "name": "StrategyCurveBoostedFactory-FXScrvUSD",
                "details": {
                    "totalDebt": "2200633127153276704669",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729397411,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x4E0Ecff2d5500be57745281A893348f23739018a",
                "name": "StrategyConvexFactory-FXScrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1715971523
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xA76436957378bF3812dba0A98E864686086fd0e6",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1116599535055525905",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-twocrypto-20/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xCA31DcB9D30e70BF709B41e3935c3f7cdBC6D255",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-EURT-USD-f",
        "name": "Curve EURT-USD Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x3b6831c0077a1e44ED0a21841C3bC4dC11bCE833",
            "name": "Curve EURT-USD Pool",
            "symbol": "crvEURTUSD",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains DAI, USDC, USDT, and Euro Tether (EURT). Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "30159445128984695626",
            "tvl": 64.7351108360481,
            "price": 2.146429105681208
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.04393784362709163
            },
            "pricePerShare": {
                "today": 1.0439378436270916,
                "weekAgo": 1.0439378436270916,
                "monthAgo": 1.0439378436270916
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.349525389015278,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xeC95086bF9c035E2685f2bf9f88bD9aDa5390DC9",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1691016515
                }
            },
            {
                "address": "0x6229E83696fB52E4bE37d4ca8c06cbe2570177C7",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "288900774247226607523",
                    "performanceFee": 0,
                    "lastReport": 1719321203
                }
            },
            {
                "address": "0x511862416E4681485275350003B37327d247418D",
                "name": "StrategyCurveBoostedFactory-crvEURTUSD",
                "details": {
                    "totalDebt": "30159445128984695626",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729280015,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xCA31DcB9D30e70BF709B41e3935c3f7cdBC6D255",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1043937843627091648",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/eurtusd/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x30B801F933e676Cb25892D1838FDCC00A1dde4cf",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-JPEG-pETH-f",
        "name": "Curve JPEG-pETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xDA68f66fC0f10Ee61048E70106Df4BDB26bAF595",
            "name": "Curve.fi Factory Crypto Pool: JPEG/pETH",
            "symbol": "JPEGpETH-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "787057506035738241198",
            "tvl": 1398.9462005611072,
            "price": 1.7774383572139958
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 1.3281099423350158
            },
            "pricePerShare": {
                "today": 2.328109942335016,
                "weekAgo": 2.328109942335016,
                "monthAgo": 2.328109942335016
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crvconvex",
                "netAPR": 838278739596001900,
                "composite": {
                    "boost": 2.1176521669424755,
                    "poolAPY": 0.007400000000000001,
                    "boostedAPR": 69.02015494516873,
                    "baseAPR": 0,
                    "cvxAPR": 1.0200140643374305,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x8698fDdfBBf28B43134457A645178c3146C06886",
                "name": "StrategyCurveBoostedFactory-JPEGpETH-f",
                "details": {
                    "totalDebt": "314823002414295296479",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279163,
                    "debtRatio": 4000
                }
            },
            {
                "address": "0xD948f7F3a38c924957B9683f1B716e73C62385AC",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1709349491,
                    "debtRatio": 6000
                }
            },
            {
                "address": "0xc2bCd0067aEb71f377983242Cc37cAEf62CCBC24",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "3931702133342946036744",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x30B801F933e676Cb25892D1838FDCC00A1dde4cf",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "2328109942335016106",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-303/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x98fA691998a9e6f410702dEA8BC08a9d500AaAFe",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-STG-FRAXBP-f",
        "name": "Curve STG-FRAXBP Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x9de1c3D446237ab9BaFF74127eb4F303802a2683",
            "name": "Curve STG-FRAXBP Pool",
            "symbol": "STG/FRAXBP-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains STG and Frax's base pool: Frax and USDC. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.03603615853453
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.03757263061351497,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0043,
                    "boostedAPR": 0.03744736734834997,
                    "baseAPR": 0.014978946939339988,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x3c215283232c99F493c31671De215f1C1a3030D9",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1717546439
                }
            },
            {
                "address": "0x1D4e187630289eA37cB5979082dFC6596dF49d25",
                "name": "StrategyCurveBoostedFactory-STG/FRAXBP-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x5711207A2af8ad5c963e91cF6C388D65fBd4Cbae",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1677128075
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x98fA691998a9e6f410702dEA8BC08a9d500AaAFe",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-161/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x0a35322c5C9Dd22fF592bfC5b134c5CE78154d10",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-TOKEETH-f",
        "name": "Curve TOKEETH-f Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x7ea4aD8C803653498bF6AC1D2dEbc04DCe8Fd2aD",
            "name": "Curve.fi Factory Crypto Pool: TOKE/ETH",
            "symbol": "TOKEETH-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 68.48475960840791
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0064791778027113375,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0070999999999999995,
                    "boostedAPR": 0.00009908644745704187,
                    "baseAPR": 0.00003963457898281675,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x14D84B8A2DB04F7c3f8473c9532E297EfD7ba3df",
                "name": "StrategyCurveBoostedFactory-TOKEETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x16Ff6b9d22e1Ea7921770e99538Ce5eb9732169d",
                "name": "StrategyConvexFactory-TOKEETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1713062879
                }
            },
            {
                "address": "0x27C54C94aEf32a4E0D7Ba851a4503d239339220D",
                "name": "StrategyCurveBoostedFactory-TOKEETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1713062879
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x0a35322c5C9Dd22fF592bfC5b134c5CE78154d10",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-55/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x571B384636BA518697d745AC218aD4cEE5EE0ABC",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-sBTCv2-f",
        "name": "Curve sBTCv2 Factory yVault",
        "category": "Curve",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x051d7e5609917Bd9b73f04BAc0DED8Dd46a74301",
            "name": "Curve sBTCv2 Pool",
            "symbol": "crvWSBTC",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This liquidity pool contains sBTC and wBTC and serves as a base pool for other Bitcoin pools.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "5334642601274868",
            "tvl": 345.20815420725944,
            "price": 64710.64324435941
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.5997692311905369
            },
            "pricePerShare": {
                "today": 1.599769231190537,
                "weekAgo": 1.599769231190537,
                "monthAgo": 1.599769231190537
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x316fBF1A81b2765FA122Ae0d985217C8d657efd9",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1673367779
                }
            },
            {
                "address": "0x6db528A2276CF28b02fA454191B073D1b4c73f1a",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "75948293711087016",
                    "performanceFee": 0,
                    "lastReport": 1718232179
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x571B384636BA518697d745AC218aD4cEE5EE0ABC",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1599769231190536868",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/sbtc2/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x2Ab6578239eD541Ef7cC7D11a45D740cE9F0a1F4",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-CTR-ETH-f",
        "name": "Curve CTR-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x3f0e7916681452D23Cd36B1281457DA721F2E5dF",
            "name": "Curve CTR-ETH Pool",
            "symbol": "CTRETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains CTR and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss. veCTR is [Aladdin DAO](https://aladdin.club)'s governance token.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "9621378900950051681",
            "tvl": 550.2289753343372,
            "price": 57.188162008670666
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 7.337833242219404
            },
            "pricePerShare": {
                "today": 8.337833242219405,
                "weekAgo": 8.337833242219405,
                "monthAgo": 8.337833242219405
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.14180155263914623,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0008,
                    "boostedAPR": 0.15675728071016248,
                    "baseAPR": 0.062702912284065,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x3a208E0aD8CA9B1C8e97a67d7b0bB40dCA704A69",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "9408262832321359873",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0x20bA25a33AfF2109C38e8D762578746d93aB1284",
                "name": "StrategyCurveBoostedFactory-CTRETH-f",
                "details": {
                    "totalDebt": "9621378900950051681",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729301123,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xf53F09CE630F2945d8db241670Ce2A6F2EffCF53",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1679201675
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x2Ab6578239eD541Ef7cC7D11a45D740cE9F0a1F4",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "8337833242219405357",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-151/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xca46d6e44499AfbD8795f8F86910F068a6bF1a7c",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-DYDX-ETH-f",
        "name": "Curve DYDX-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x4aCc1BF7D6a591016641325aA6664A1Cd178F002",
            "name": "Curve DYDX-ETH Pool",
            "symbol": "DYDXETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains DYDX, and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2760400096483532810",
            "tvl": 318.296976096841,
            "price": 115.30827596416866
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.2531025510357522,
                "composite": {
                    "boost": 1.1742102975909037,
                    "poolAPY": 0.08439999999999999,
                    "boostedAPR": 0.1968250567063913,
                    "baseAPR": 0.16762334405532986,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xf65B3981127c3dD59798bC54dFED0205C5E9c686",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0x26f300795cEaFcD7199A199d71C0D9cDf82fb14e",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1676471195
                }
            },
            {
                "address": "0x2554DAd5B7320AC11f2D0D60710a7A18AE27cBe6",
                "name": "StrategyCurveBoostedFactory-DYDXETH-f",
                "details": {
                    "totalDebt": "2760400096483532810",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729301351,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xca46d6e44499AfbD8795f8F86910F068a6bF1a7c",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-10/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x5383C1Ab5beac04d6A6E6872Cc6a422f2Dc25576",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USDC+-f",
        "name": "Curve USDC+ Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xfed2B54453F75634bcdaEA5e5b11a3f99b9C28Fa",
            "name": "Curve.fi Factory Crypto Pool: USDC+",
            "symbol": "USDC+LP-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2076575526463063718520",
            "tvl": 4286.616715162962,
            "price": 2.064272
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.4394333299245625
            },
            "pricePerShare": {
                "today": 1.4394333299245625,
                "weekAgo": 1.4394333299245625,
                "monthAgo": 1.4394333299245625
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 1.69696177562645,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x6B6e10D838b41fC96B14711980c4D53C6C97a0ac",
                "name": "StrategyCurveBoostedFactory-USDC+LP-f",
                "details": {
                    "totalDebt": "2076575526463063718520",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729301423,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xD6bbEF6FD1F4c02905DB978ddbD8baF19Ab36187",
                "name": "StrategyCurveBoostedFactory-USDC+LP-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "14349466760646070726090",
                    "performanceFee": 0,
                    "lastReport": 1719321107
                }
            },
            {
                "address": "0x64D2dfDb990129966C7ed7F3637139110001211E",
                "name": "StrategyConvexFactory-USDC+LP-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1712418863
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x5383C1Ab5beac04d6A6E6872Cc6a422f2Dc25576",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1439433329924562316",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-312/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x77e829FFF18C14AD9bb88963acB0010A0506de88",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-StaFi-rETH-f",
        "name": "Curve StaFi rETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x53a901d48795C58f485cBB38df08FA96a24669D5",
            "name": "Curve rETH Pool",
            "symbol": "crvRETH",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains ETH and rETH, a token that represents staked ether in StaFi, an ETH 2.0 staking platform.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "16426806915858582285",
            "tvl": 42570.324427462365,
            "price": 2591.515481098436
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.092848983793681
            },
            "pricePerShare": {
                "today": 1.092848983793681,
                "weekAgo": 1.092848983793681,
                "monthAgo": 1.092848983793681
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.01794046946415393,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.0147,
                    "boostedAPR": 0.005233854960171035,
                    "baseAPR": 0.0020935419840684144,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x16C9FfBc43778C4eC614693c59abab0585a47d94",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "9155479475235967840",
                    "performanceFee": 0,
                    "lastReport": 1719490379
                }
            },
            {
                "address": "0xaC90Cc48283304E5B2256B83EAd5FAC9e0Ff87A2",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1686689267
                }
            },
            {
                "address": "0xd503bcE67514418ED22a3C6f14978EEe872f9697",
                "name": "StrategyCurveBoostedFactory-rCRV",
                "details": {
                    "totalDebt": "16426806915858582285",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730404607,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x77e829FFF18C14AD9bb88963acB0010A0506de88",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1092848983793680947",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/reth/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x03eaE26089A8c28DDC4c81d65bEfE014C793A60d",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-stETH-frxETH-f",
        "name": "Curve stETH-frxETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x4d9f9D15101EEC665F77210cB999639f760F831E",
            "name": "Curve frxETH-stETH Pool",
            "symbol": "st-frxETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains frxETH and stETH, a token that represents staked ether in Lido, a decentralized ETH 2.0 staking platform.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2518.471314840912
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.01251,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0139,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xE4bF7a8F2a387cF1ad4Bce20DC560623501e0612",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719056891
                }
            },
            {
                "address": "0x6735374CE415A75365A8CE36EaC52436cf391811",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1685706383
                }
            },
            {
                "address": "0x8f9f69DE0bac06FD22d3a5FF699A717692dDF144",
                "name": "StrategyCurveBoostedFactory-st-frxETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x03eaE26089A8c28DDC4c81d65bEfE014C793A60d",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-274/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xb2155fFA9807B2dECb4A411f7330da5BB6e46C31",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-sfrxETH",
        "name": "yPT-sfrxETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xac3E018457B222d93114458476f3E3416Abbe38F",
            "name": "Staked Frax Ether",
            "symbol": "sfrxETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2685.96
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.03625379026254061,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.03625379026254061
                }
            }
        },
        "strategies": [
            {
                "address": "0x6Cfc23f8c12D411E0c40b48bCBbf4830A01C2Be3",
                "name": "yPT-sfrxETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719080135
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xb2155fFA9807B2dECb4A411f7330da5BB6e46C31",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0xEeC7036C1Af1f07668b4c5520CcB4b52Ec4594D7",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-PYUSD-USDC-f",
        "name": "Curve PYUSD-USDC Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x383E6b4437b59fff47B619CBA855CA29342A8559",
            "name": "PayPool",
            "symbol": "PYUSDUSDC",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.0014782754957734
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.020960132776007712,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0232,
                    "boostedAPR": 0.00008903641778634785,
                    "baseAPR": 0.00003561456711453914,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xFd8fB97222379aA394a9db964A4d782b45B47B04",
                "name": "StrategyConvexFactory-PYUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1705434971
                }
            },
            {
                "address": "0xd7fB32BAD393dA081ba4e4bb25511c251915B37b",
                "name": "StrategyCurveBoostedFactory-PYUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1705434971
                }
            },
            {
                "address": "0x1514945fa9ad6002E15F11F7dd2878C7A2A96809",
                "name": "StrategyCurveBoostedFactory-PYUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xEeC7036C1Af1f07668b4c5520CcB4b52Ec4594D7",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-43/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x5b737CC835c29c493845353e0399B408Fbd7105D",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-crvsFRAX-f",
        "name": "Curve crvsFRAX Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x73a0cba58c19ed5F27C6590BD792eC38dE4815Ea",
            "name": "crvUSD/sFRAX",
            "symbol": "crvsFRAX",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.040722829386966
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.18438288533478553,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0438,
                    "boostedAPR": 0.16106987259420613,
                    "baseAPR": 0.06442794903768245,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x600DD188d938563A44d9995336b9DCbdFEb93284",
                "name": "StrategyConvexFactory-crvsFRAX",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719607139
                }
            },
            {
                "address": "0x94fc2a78d23c452e113f5a14a85D9c8c7843DC4c",
                "name": "StrategyCurveBoostedFactory-crvsFRAX",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719607139,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x5b737CC835c29c493845353e0399B408Fbd7105D",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-49/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xF56fB6cc29F0666BDD1662FEaAE2A3C935ee3469",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USDP-crvUSD-f",
        "name": "Curve USDP-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xCa978A0528116DDA3cbA9ACD3e68bc6191CA53D0",
            "name": "Curve crvUSD-USDP Pool",
            "symbol": "crvUSDUSDP-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains USDP and crvUSD, a dollar pegged stablecoin from [Curve Finance](https://crvusd.curve.fi/#/ethereum/markets).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1551705693479697595111",
            "tvl": 1558.1365848670684,
            "price": 1.0041444014895309
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.3533971833269489
            },
            "pricePerShare": {
                "today": 1.353397183326949,
                "weekAgo": 1.353397183326949,
                "monthAgo": 1.353397183326949
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.11922426986559104,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0008,
                    "boostedAPR": 0.13167141096176782,
                    "baseAPR": 0.05266856438470713,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xa53b7011064f5ba55301A566197fD0129b525519",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "11318862186733681903770",
                    "performanceFee": 0,
                    "lastReport": 1719321083
                }
            },
            {
                "address": "0x55F7b876D5a78BD6aC83Cd5133d8C18C580B2be2",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1686187307
                }
            },
            {
                "address": "0x9E471f2209bb9838Fe5c4449Ef384529A4762ade",
                "name": "StrategyCurveBoostedFactory-crvUSDUSDP-f",
                "details": {
                    "totalDebt": "1551705693479697595111",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279115,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xF56fB6cc29F0666BDD1662FEaAE2A3C935ee3469",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1353397183326948763",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-2/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x468C76f16B7735303f7215b3839D270d058b3d7a",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-eUSD-FRAXBP-f",
        "name": "Curve eUSD-FRAXBP Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xAEda92e6A3B1028edc139A4ae56Ec881f3064D4F",
            "name": "Curve.fi Factory USD Metapool: eUSD+FRAX/USDC (FRAXBP)",
            "symbol": "eUSD3CRV-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "60388946727142476507",
            "tvl": 60.630996545135496,
            "price": 1.0040081808196901
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.011032326710996632
            },
            "pricePerShare": {
                "today": 1.0110323267109966,
                "weekAgo": 1.0110323267109966,
                "monthAgo": 1.0110323267109966
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crvfrax",
                "netAPR": 2.6004618638295444e+21,
                "composite": {
                    "boost": 1.9154116702639254,
                    "poolAPY": 0.0027400000000000002,
                    "boostedAPR": 134.54481618840148,
                    "baseAPR": 0.016496883866437884,
                    "cvxAPR": 1.9882480904034674,
                    "rewardsAPR": 0.03428237067760076
                }
            }
        },
        "strategies": [
            {
                "address": "0xb3A130E8133843b27C2cFbCf59524b6623418883",
                "name": "StrategyCurveBoostedFactory-eUSD3CRV-f",
                "details": {
                    "totalDebt": "12077789345428495301",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279967,
                    "debtRatio": 2000
                }
            },
            {
                "address": "0xe9029Ee4ee07C1a8b961b93acc95d0F97486f357",
                "name": "StrategyCurveBoostedFactory-eUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0xCF156f35EEF72b3f117Af6b7Ff531BA27c131C0c",
                "name": "StrategyConvexFraxFactory-eUSD3CRV-f",
                "details": {
                    "totalDebt": "48311157381713981205",
                    "totalLoss": "0",
                    "totalGain": "597299860070692257475",
                    "performanceFee": 0,
                    "lastReport": 1728399551,
                    "debtRatio": 8000
                }
            },
            {
                "address": "0xCdE9D7eda4e2f650c2CDA8771A0aaE285971A8cF",
                "name": "StrategyConvexFactory-eUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1698594923
                }
            },
            {
                "address": "0xBa8d0c9F18A8ee4F825A9037927eA10a54Ac48c8",
                "name": "StrategyConvexFraxFactory-eUSD3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1706283899
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x468C76f16B7735303f7215b3839D270d058b3d7a",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1011032326710996730",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-277/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x5B8C556B8b2a78696F0B9B830B3d67623122E270",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-stETH-f",
        "name": "Curve stETH Factory yVault",
        "category": "Curve",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x06325440D014e39736583c165C2963BA99fAf14E",
            "name": "Curve stETH Pool",
            "symbol": "crvSTETH",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains ETH and stETH, a token that represents staked ether in Lido, a decentralized ETH 2.0 staking platform.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "4507472030013102630037",
            "tvl": 12186993.481870482,
            "price": 2703.7313600002653
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.005412134990790296
            },
            "pricePerShare": {
                "today": 1.0054121349907903,
                "weekAgo": 1.0054121349907903,
                "monthAgo": 1.0054121349907903
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.01494302160741028,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.0166,
                    "boostedAPR": 0.000003357341566978533,
                    "baseAPR": 0.0000013429366267914133,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xaBec96AC9CdC6863446657431DD32F73445E80b1",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "71994852927528127095",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x3E55bf8882d7f908b4aDA67055BE14A0AB14622B",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1671565859
                }
            },
            {
                "address": "0x95BE5AC6BEb4858B829A29E795B132D9f6799431",
                "name": "StrategyCurveBoostedFactory-steCRV",
                "details": {
                    "totalDebt": "4507472030013102630037",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730057747,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x5B8C556B8b2a78696F0B9B830B3d67623122E270",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1005412134990790212",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/steth/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xC7baE383738274ea8C3292d53AfBB3b42B348DF0",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysWETH",
        "name": "Aave V3 Lido WETH Lender",
        "category": "Volatile",
        "version": "3.0.3",
        "description": "Supplies {{token}} to [Aave V3](https://app.aave.com/) to generate interest and earn any applicable rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "152746317753387484680",
            "tvl": 374653.11325915373,
            "price": 2452.78
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 0.14900543484504117,
                "monthAgo": 0,
                "inception": 0.0038796512996250865
            },
            "pricePerShare": {
                "today": 1.003879651299625,
                "weekAgo": 1.001019100602053,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.02630582018930938,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.02630582018930938,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xC7baE383738274ea8C3292d53AfBB3b42B348DF0",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1003875165322900873",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0xb37094c1B5614Bd6EcE40AFb295C26F4377069d3",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-FRAX-f",
        "name": "Curve FRAX Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
            "name": "Curve FRAX Pool",
            "symbol": "crvFRAX",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This factory metapool contains 3Crv (DAI, USDC, and USDT) and FRAX, a partially-algorithmic stablecoin.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "164579247596261919007038",
            "tvl": 166594.8428282797,
            "price": 1.012246958601745
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.018906325606405483
            },
            "pricePerShare": {
                "today": 1.0189063256064055,
                "weekAgo": 1.0189063256064055,
                "monthAgo": 1.0189063256064055
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0017299131442298254,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.0016,
                    "boostedAPR": 0.0003221257158109169,
                    "baseAPR": 0.0001288502863243668,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xcB7DDC0E702C2017B23a84D1B890fd32400F7A25",
                "name": "StrategyCurveBoostedFactory-FRAX3CRV-f",
                "details": {
                    "totalDebt": "164579247596261919007038",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730400743,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xcD0f7f16f1D1BA3845b481B61285E1a63dA2B156",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1672372283
                }
            },
            {
                "address": "0xc518042B11E8e678d0ce05B9323064DbA13E3cE6",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "8550576023010022490881",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xb37094c1B5614Bd6EcE40AFb295C26F4377069d3",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1018906325606405407",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/frax/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x4cE9c93513DfF543Bc392870d57dF8C04e89Ba0a",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDS",
        "name": "Sky Rewards USDS Compounder",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Invests the USDS into Sky's Rewards Token Module and auto-compounds the SKY Rewards into more USDS.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
            "name": "USDS Stablecoin",
            "symbol": "USDS",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "6488790419249326499463980",
            "tvl": 6488744.997716392,
            "price": 0.999993
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.09252713397863703,
                "monthAgo": 0,
                "inception": 0.003787565680379634
            },
            "pricePerShare": {
                "today": 1.0037875656803796,
                "weekAgo": 1.0020095068441783,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.07762252931724967,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.07762252931724967,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x4cE9c93513DfF543Bc392870d57dF8C04e89Ba0a",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1003773437117391779",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                3,
                5,
                1,
                1,
                2,
                2,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0x7845Ebf66c9575Fc5f5A0dBb9a34a706Ad997a3f",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-3CryptoUSDT-f",
        "name": "Curve TriCryptoUSDT Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xf5f5B97624542D72A9E06f04804Bf81baA15e2B4",
            "name": "TricryptoUSDT",
            "symbol": "crvUSDTWBTCWETH",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains wBTC, wETH, and USDT. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "14537977112855187173",
            "tvl": 24395.086531353536,
            "price": 1678.024827111759
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.1505538785529934
            },
            "pricePerShare": {
                "today": 1.1505538785529934,
                "weekAgo": 1.1505538785529934,
                "monthAgo": 1.1505538785529934
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.05416386892356832,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.0092,
                    "boostedAPR": 0.05098207658174258,
                    "baseAPR": 0.020392830632697034,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xAAc7aedFb479b58e34373e863f27E263C65dDF28",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1686187211
                }
            },
            {
                "address": "0x8677d8F5aD53534A28Ac9b63f914483F5E0B3776",
                "name": "StrategyCurveBoostedFactory-crvUSDTWBTCWETH",
                "details": {
                    "totalDebt": "14537977112855187173",
                    "totalLoss": "0",
                    "totalGain": "1705921150886598950",
                    "performanceFee": 0,
                    "lastReport": 1730400983,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x9dcE9929A4e9b77EBb7b4b7f8151208a3595482F",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "80432606826278790935",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x7845Ebf66c9575Fc5f5A0dBb9a34a706Ad997a3f",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1150553878552993401",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-tricrypto-1/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xAE6eD98B1Bd9aAdd3185160324e0e011159B61D3",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-Compound-f",
        "name": "Curve Compound Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
            "name": "Curve Compound Pool",
            "symbol": "crvCOMP",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains DAI and USDC lent out to Compound, a decentralized money market on Ethereum.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "6684636849882209998847",
            "tvl": 7978.272645739577,
            "price": 1.1935237208705154
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.018184440235536448
            },
            "pricePerShare": {
                "today": 1.0181844402355364,
                "weekAgo": 1.0181844402355364,
                "monthAgo": 1.0181844402355364
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.02806731844179399,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.030600000000000002,
                    "boostedAPR": 0.000585909379771099,
                    "baseAPR": 0.0002343637519084396,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x85b7f76e1900c982FBE17b74571d978cE784D229",
                "name": "StrategyCurveBoostedFactory-cDAI+cUSDC",
                "details": {
                    "totalDebt": "6684636849882209998847",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729472243,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x6DA63D9A58D9b44a68373512C13Ac0EB74f3365E",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "3403728434139210171322",
                    "performanceFee": 0,
                    "lastReport": 1719321275
                }
            },
            {
                "address": "0x5eA59136F4CBECfFD1BD40AABDed9de784011a73",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1718572871
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xAE6eD98B1Bd9aAdd3185160324e0e011159B61D3",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1018184440235536332",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/compound/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x9F8B5c0fc18B79DdFc05b21c43da7E324Cf3B8Eb",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ibEUR-USDC-f",
        "name": "Curve ibEUR-USDC Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x8682Fbf0CbF312C891532BA9F1A91e44f81ad7DF",
            "name": "Curve ibEUR-USDC Pool",
            "symbol": "crvibEUR-USDC",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Curve v2 crypto pool contains ibEUR and USDC.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "134919890759503906",
            "tvl": 0.25203703058004756,
            "price": 1.86804947114363
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.5132932628306537
            },
            "pricePerShare": {
                "today": 1.5132932628306537,
                "weekAgo": 1.5132932628306537,
                "monthAgo": 1.5132932628306537
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x967F222172627044E7BbA2329655168A17E4642C",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1676242007
                }
            },
            {
                "address": "0xC18207Dc4dbc366a8Fed62e438C173C47E57f096",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "12975271890679504985925",
                    "performanceFee": 0,
                    "lastReport": 1718232191
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x9F8B5c0fc18B79DdFc05b21c43da7E324Cf3B8Eb",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1513293262830653650",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-27/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x5F208d3a8b13062adE45a33Ca9Bc8de64D520CB9",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-stETHv2-f",
        "name": "Curve stETHv2 Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x21E27a5E5513D6e65C4f830167390997aA84843a",
            "name": "Curve stETHv2 Pool",
            "symbol": "stETH-ng-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains ETH and stETH, a token that represents staked ether in Lido, a decentralized ETH 2.0 staking platform.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "129035088949011598662",
            "tvl": 328341.4330212028,
            "price": 2544.5902792452634
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.019640982563116527
            },
            "pricePerShare": {
                "today": 1.0196409825631165,
                "weekAgo": 1.0196409825631165,
                "monthAgo": 1.0196409825631165
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.018816871961977993,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0192,
                    "boostedAPR": 0.0017076355133088805,
                    "baseAPR": 0.0006830542053235522,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x1AADE40cbdc716749668561391596901E7f42Da7",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1685706467
                }
            },
            {
                "address": "0xcfE19203647FD98B96b692b3Dee0aFD4E1Fc0EDD",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "9862704007908337068",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x2FA0E184D09183851673b8f6ecFFA36B539F5023",
                "name": "StrategyCurveBoostedFactory-stETH-ng-f",
                "details": {
                    "totalDebt": "129035088949011598662",
                    "totalLoss": "0",
                    "totalGain": "353891817596595022",
                    "performanceFee": 0,
                    "lastReport": 1730078891,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x5F208d3a8b13062adE45a33Ca9Bc8de64D520CB9",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1019640982563116439",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-303/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x6A5694C1b37fFA30690b6b60D8Cf89c937d408aD",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-COVEYFI-f",
        "name": "Curve COVEYFI Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xa3f152837492340dAAf201F4dFeC6cD73A8a9760",
            "name": "coveYFI/YFI",
            "symbol": "COVEYFI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "13067161019395584515",
            "tvl": 54964.61703355685,
            "price": 4206.3166553142555
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": 0.6418651746367219,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0022500000000000003,
                "composite": {
                    "boost": 1.1519956940312048,
                    "poolAPY": 0.0025,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x96109860eC35742bf813E3e8070157A30CB6e3dE",
                "name": "StrategyCurveBoostedFactory-COVEYFI",
                "details": {
                    "totalDebt": "13067161019395584515",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730019671,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xD5f96549fD0D57517E827FE95C847bE31615A832",
                "name": "StrategyConvexFactory-COVEYFI",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720710803
                }
            }
        ],
        "staking": {
            "address": "0x97A597CBcA514AfCc29cD300f04F98d9DbAA3624",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731542400,
                    "apr": 0.6418651746367219,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0x6A5694C1b37fFA30690b6b60D8Cf89c937d408aD",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-152/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x4CbB6A5EC00cEEC252a7091559484F7adb83165f",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-alUSD-f",
        "name": "Curve alUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
            "name": "Curve alUSD Pool",
            "symbol": "crvALUSD",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This factory metapool contains 3Crv (DAI, USDC, and USDT) and Alchemix USD.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "250962522780760360192054",
            "tvl": 252928.5442191647,
            "price": 1.0078339244307082
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.07720118471911142
            },
            "pricePerShare": {
                "today": 1.0772011847191114,
                "weekAgo": 1.0772011847191114,
                "monthAgo": 1.0772011847191114
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.005208223390642015,
                "composite": {
                    "boost": 1.4420067829538026,
                    "poolAPY": 0.0016,
                    "boostedAPR": 0.004186914878491128,
                    "baseAPR": 0.0029035334146727543,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x42ABdb829074Ad2b261B44C482F4C919D9c60c30",
                "name": "StrategyCurveBoostedFactory-alUSD3CRV-f",
                "details": {
                    "totalDebt": "247890982677299583942964",
                    "totalLoss": "0",
                    "totalGain": "6484223965346584951208",
                    "performanceFee": 0,
                    "lastReport": 1730482967,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xbCE2274FBdaEf299Ea4775b159dEF29440f109E9",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "31423377822482670619458",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x3aF67f8CF0DAe9d00E08ef4d7B089d396ba750CE",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1672372283
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x4CbB6A5EC00cEEC252a7091559484F7adb83165f",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1077201184719111466",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/alusd/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xbE4afE6737CCf34cA21cdeF461E5C7547Adc8C77",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ibGBP-f",
        "name": "Curve ibGBP Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xD6Ac1CB9019137a896343Da59dDE6d097F710538",
            "name": "Curve ibGBP Pool",
            "symbol": "crvIBGBP",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains ibGBP, a synthetic pound sterling minted from the Iron Bank, and synthetic pound sterling (sGBP) minted on the Synthetix platform.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.294809
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0xAE85D388474b2170b4114c32918FF6AaB1089Cd8",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "2617121839217362304773",
                    "performanceFee": 0,
                    "lastReport": 1713100427
                }
            },
            {
                "address": "0x35961C0bd7967bA672255E6c70DbF6b558B1C4ea",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1705893119
                }
            },
            {
                "address": "0x15BA66d9A0Df19c7518D2E2b43129Ffd39D2F7Ed",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "15109945812525679910261",
                    "performanceFee": 0,
                    "lastReport": 1713147611
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xbE4afE6737CCf34cA21cdeF461E5C7547Adc8C77",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-30/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xd9788f3931Ede4D5018184E198699dC6d66C1915",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvAAVE",
        "name": "AAVE yVault",
        "category": "Volatile",
        "version": "0.4.3",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            "name": "Aave Token",
            "symbol": "AAVE",
            "description": "Aave is a decentralized money market where users can lend and borrow more than 25 different crypto assets. Lenders can earn interest by providing liquidity to the market, while borrowers can borrow by collateralizing their cryptoassets to take out loans from the liquidity pools. AAVE tokens are used for protocol governance and can be staked for protocol fees in exchange for providing an insurance backstop.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "227778540286526892444",
            "tvl": 30727.32508465248,
            "price": 134.9
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.04936373253465876
            },
            "pricePerShare": {
                "today": 1.0493637325346588,
                "weekAgo": 1.0493637325346588,
                "monthAgo": 1.0493637325346588
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0xC06ed8E16F1E66acC03F7af1b0bA96fFF589E495",
                "name": "Iron Bank Lender Optimizer",
                "description": "Supplies {{token}} to [Iron Bank](https://app.ib.xyz) to generate interest. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "227778540286526892444",
                    "totalLoss": "0",
                    "totalGain": "298977886492844136049",
                    "performanceFee": 0,
                    "lastReport": 1730090663,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x86bcA96E6f7e816884f752399bC9a60651B34B93",
                "name": "Staked AAVE Cooldown",
                "description": "Buys stkAAVE with AAVE from [Sushiswap](https://sushi.com) and [Uniswap](https://uniswap.org), unstakes stkAAVE and waits for cooldown period, effectively, arbitraging stkAAVE and AAVE prices.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "150099565700806473252",
                    "performanceFee": 0,
                    "lastReport": 1647665155
                }
            },
            {
                "address": "0xdcfFee74ABDCf70453Bb798Be1b41462EDdbC692",
                "name": "Staked AAVE Cooldown",
                "description": "Buys stkAAVE with AAVE from [Sushiswap](https://sushi.com) and [Uniswap](https://uniswap.org), unstakes stkAAVE and waits for cooldown period, effectively, arbitraging stkAAVE and AAVE prices.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "244168651335532993866",
                    "performanceFee": 0,
                    "lastReport": 1654728820
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xd9788f3931Ede4D5018184E198699dC6d66C1915",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1049363732534658754",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x91F008870eEF686b61a3775944D55a3FC53B7024",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDS",
        "name": "Sky Savings Rate USDS Lender",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Invests the USDS into the Sky Savings Rate.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
            "name": "USDS Stablecoin",
            "symbol": "USDS",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "357222781534677876712",
            "tvl": 357.2202809752072,
            "price": 0.999993
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 0.07811999679543266,
                "monthAgo": 0,
                "inception": 0.004486307936283129
            },
            "pricePerShare": {
                "today": 1.0044863079362831,
                "weekAgo": 1.0029836461429738,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.06711570802190625,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.06711570802190625,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x91F008870eEF686b61a3775944D55a3FC53B7024",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1004475948467713632",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                5,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0xAd86Df2e8F989c828B25A7Da5EB1Ec363283fA3F",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-LUSD-f",
        "name": "Curve LUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
            "name": "Curve LUSD Pool",
            "symbol": "crvLUSD",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This factory metapool contains 3Crv (DAI, USDC, and USDT) and Liquity USD, a synthetic USD stablecoin collateralized with Ether.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "403883506915412133305549",
            "tvl": 417676.6565194217,
            "price": 1.0341513069185526
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.0021751934689804298
            },
            "pricePerShare": {
                "today": 1.0021751934689804,
                "weekAgo": 1.0021751934689804,
                "monthAgo": 1.0021751934689804
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crvconvex",
                "netAPR": 0.00964550995149007,
                "composite": {
                    "boost": 1.9301361846595357,
                    "poolAPY": 0.002603,
                    "boostedAPR": 0.008061433395970147,
                    "baseAPR": 0.00033139539485316227,
                    "cvxAPR": 0.00011617205355580428,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x1C06a4F3fF3135ed908Eeb4F720776cC76b2fB13",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "247403561891003420895057",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719351923,
                    "debtRatio": 6300
                }
            },
            {
                "address": "0x8308Cf5c99a8b153D7f1D66E40593a910f9F7eD0",
                "name": "StrategyCurveBoostedFactory-LUSD3CRV-f",
                "details": {
                    "totalDebt": "149436897558702489323053",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730403695,
                    "debtRatio": 3700
                }
            },
            {
                "address": "0x03614B1DE305971f6642a01274af712b022ac904",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1708478651
                }
            },
            {
                "address": "0xB73fa254f47cE89Af8B7fC9919C38D62F12bbb5B",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "5839729604250000623645",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xAd86Df2e8F989c828B25A7Da5EB1Ec363283fA3F",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1002175193468980501",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/lusd/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x321d570790fd2f109Fe4e55aa419Adf2fce0c842",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-agEUR-EUROC-f",
        "name": "Curve agEUR-EUROC Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xBa3436Fd341F2C8A928452Db3C5A3670d1d5Cc73",
            "name": "Curve.fi Factory Plain Pool: agEUR/EUROC",
            "symbol": "agEUREUROC-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "61649358857970729275913",
            "tvl": 67364.09373580049,
            "price": 1.092697393512161
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.14428789661061026
            },
            "pricePerShare": {
                "today": 1.1442878966106103,
                "weekAgo": 1.1442878966106103,
                "monthAgo": 1.1442878966106103
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.037580634695366245,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0049,
                    "boostedAPR": 0.03685626077262916,
                    "baseAPR": 0.014742504309051663,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xE1c43Cee52dd10543622E429516194F818efc390",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "17072983998965005193784",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x89234C954cC17994999cBDA920e35306DCE232c2",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1684449887
                }
            },
            {
                "address": "0x9e5f4954be2471b4cF1F0c0746A933909eA3B0eb",
                "name": "StrategyCurveBoostedFactory-agEUREUROC-f",
                "details": {
                    "totalDebt": "61649358857970729275913",
                    "totalLoss": "0",
                    "totalGain": "803378712806789213414",
                    "performanceFee": 0,
                    "lastReport": 1730403635,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x321d570790fd2f109Fe4e55aa419Adf2fce0c842",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1144287896610610258",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-164/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xB5dE7250128775a317B3f775a7AFcEC73571B732",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-sETH-f",
        "name": "Curve sETH Factory yVault",
        "category": "Curve",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
            "name": "Curve sETH Pool",
            "symbol": "crvSETH",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains ETH and sETH, a synthetic ETH minted via the Synthetix platform.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "90909162000150435221",
            "tvl": 279567.64793150855,
            "price": 3075.2417224024784
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.04622041891289941
            },
            "pricePerShare": {
                "today": 1.0462204189128994,
                "weekAgo": 1.0462204189128994,
                "monthAgo": 1.0462204189128994
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x1A59095DC5D62545B6F40440341B153d92E1fC15",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "8442597627416096525",
                    "performanceFee": 0,
                    "lastReport": 1718232179
                }
            },
            {
                "address": "0xe3E28866FAbE0F9E2BC1022df4b76CAfCf887121",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1672372199
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xB5dE7250128775a317B3f775a7AFcEC73571B732",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1046220418912899441",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/seth/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xE403bbF2262643c2e996E7469be736E211D5B272",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-ezETH",
        "name": "yPT-ezETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
            "name": "Renzo Restaked ETH",
            "symbol": "ezETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "19780138785928592",
            "tvl": 49.623423179198355,
            "price": 2508.75
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.05533581644828889,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.05533581644828889
                }
            }
        },
        "strategies": [
            {
                "address": "0x0F5726C4b77ffEAeE0a96EA0cF2E72BcfA460510",
                "name": "yPT-ezETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719079967
                }
            },
            {
                "address": "0x2b56A707793Ada3FbBE78672c1891F18C4bE8964",
                "name": "yPT-ezETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "19780138785928592",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1727185475,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xE403bbF2262643c2e996E7469be736E211D5B272",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0x9068678b49B8D633952aEF7bc0077FDa71Ca68b8",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurveLend-crvUSD-USDe-f",
        "name": "Curve Lend crvUSD-USDe Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "description": "This token represents a Curve Llama Lend deposit LP. Holders earn interest from users borrowing their supplied crvUSD against the specified collateral, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Llama Lend market accepts [Ethena's](https://ethena.fi/) USDe as collateral.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xc687141c18F20f7Ba405e45328825579fDdD3195",
            "name": "Curve Vault for crvUSD",
            "symbol": "cvcrvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.001011
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x98a6e95F6C7BDF8FEc47F383305666182E8C7924",
                "name": "StrategyCurveBoostedFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x877B64c07e234eD19002d646b3be28f4649Df872",
                "name": "StrategyConvexFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x9068678b49B8D633952aEF7bc0077FDa71Ca68b8",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x182863131F9a4630fF9E27830d945B1413e347E8",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvUSDS-1",
        "name": "USDS",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Multi strategy USDS vault. \u003cbr/\u003e\u003cbr/\u003eMulti strategy vaults are (wait for it) vaults that contain multiple strategies. Multi strategy vaults give the vault creator flexibility to balance risk and opportunity across multiple different strategies.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
            "name": "USDS Stablecoin",
            "symbol": "USDS",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "6825652710940767780487529",
            "tvl": 6825604.93137179,
            "price": 0.999993
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.0732544879837647,
                "monthAgo": 0,
                "inception": 0.0016915017713112768
            },
            "pricePerShare": {
                "today": 1.0016915017713113,
                "weekAgo": 1.0002862190762167,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.06072539990158754,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.06807795001215866,
                    "v3OracleStratRatioAPR": 0.06072539990158754
                }
            }
        },
        "strategies": [
            {
                "address": "0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD",
                "name": "Staked USDS",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729725611
                }
            },
            {
                "address": "0x832c30802054F60f0CeDb5BE1F9A0e3da2a0Cab4",
                "name": "Aave V3 USDS Lender",
                "details": {
                    "totalDebt": "203479910214917044923643",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1730607263,
                    "debtRatio": 298
                }
            },
            {
                "address": "0x4cE9c93513DfF543Bc392870d57dF8C04e89Ba0a",
                "name": "Sky Rewards USDS Compounder",
                "details": {
                    "totalDebt": "6482798229699349795134074",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 1000,
                    "lastReport": 1730437715,
                    "debtRatio": 9498
                }
            },
            {
                "address": "0x91F008870eEF686b61a3775944D55a3FC53B7024",
                "name": "Sky Savings Rate USDS Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1728761075
                }
            },
            {
                "address": "0xC08d81aba10f2dcBA50F9A3Efbc0988439223978",
                "name": "Aave V3 Lido USDS Lender",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 500,
                    "lastReport": 1728351743
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x182863131F9a4630fF9E27830d945B1413e347E8",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1001680130342917632",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x3221BFBE308144f19089CB197b7C11c2Bf495906",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-BTRFLY-ETH-f",
        "name": "Curve BTRFLY-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x7483Dd57f6488b0e194A151C57Df6Ec85C00aCE9",
            "name": "Curve BTRFLY-ETH Pool",
            "symbol": "BTRFLYETH-f",
            "description": "This token represents a Curve crypto pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains BTRFLY and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they can be subject to impermanent loss. BTRFLY is the governance token of the [Redacted ecosystem](https://app.redacted.finance).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1528.350861
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x975EFC4aF7AE20B5B44247bb0203963f52af7485",
                "name": "StrategyCurveBoostedFactory-BTRFLYETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x8881B46FaEdED691893Be75014Dcb31638BF300F",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1677271451
                }
            },
            {
                "address": "0xaBF4d7760cdc69b796AD1a4CeB1d98d3ae335901",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1675451555
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x3221BFBE308144f19089CB197b7C11c2Bf495906",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-85/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x708d1A6FDF342D53F4d006aa9B85e223c68a0Edb",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-PRISMA-mkUSD-f",
        "name": "Curve PRISMA-mkUSD Factory yVault",
        "category": "Prisma",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x067079c14B85169e6a29703769dadDef90816f4C",
            "name": "Curve.fi Factory Crypto Pool: PRISMA/mkUSD",
            "symbol": "mkPRISMA-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "23692102712731926686590",
            "tvl": 7688.042978203012,
            "price": 0.3244981279804906
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 1.080518646894923
            },
            "pricePerShare": {
                "today": 2.080518646894923,
                "weekAgo": 2.080518646894923,
                "monthAgo": 2.080518646894923
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "prisma",
                "netAPR": 0.11002170053402247,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0017000000000000001,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.10849170053402246
                }
            }
        },
        "strategies": [
            {
                "address": "0x3408Da7623c1F3D07a3c4946c9Fc4c1c1B7377d5",
                "name": "StrategyPrismaConvexFactory-mkPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "14404678154929630029103",
                    "performanceFee": 0,
                    "lastReport": 1721755427
                }
            },
            {
                "address": "0xA3A4cf9947d7967D0Cd5F3644b5c730105D0A1Da",
                "name": "StrategyCurveBoostedFactory-mkPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702218083
                }
            },
            {
                "address": "0xF189B4C61761B0cFA7f2d92923Ab7e2dF8b91986",
                "name": "StrategyPrismaConvexFactory-mkPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "47753091250407772844270",
                    "performanceFee": 0,
                    "lastReport": 1705603355
                }
            },
            {
                "address": "0x7a26b8A8881bDA547EECf225C51FFb16cB82704f",
                "name": "StrategyCurveBoostedFactory-mkPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494399
                }
            },
            {
                "address": "0x1BC2716Bb4C381C7907CD7d7f87f8C5D393E396a",
                "name": "StrategyConvexFactory-mkPRISMA-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702218083
                }
            },
            {
                "address": "0x3f107f0469659572Ab14ebe08d920bC72B0d61A4",
                "name": "StrategyPrismaConvexFactory-mkPRISMA-f",
                "details": {
                    "totalDebt": "23692102712731926686590",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1727826503,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x708d1A6FDF342D53F4d006aa9B85e223c68a0Edb",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "2080518646894923164",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-339/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xf766c7293f4e0265dDfA8369F78a808dF8AC70c1",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDC",
        "name": "Aave V3 USDC Lender",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Supplies {{token}} to [Aave V3](https://app.aave.com/) to generate interest and earn any applicable rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "name": "USD Coin",
            "symbol": "USDC",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "1608776013382",
            "tvl": 1610384.7893953817,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 0.257783507948238,
                "monthAgo": 0,
                "inception": 0.006612000000000063
            },
            "pricePerShare": {
                "today": 1.006612,
                "weekAgo": 1.00166,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.045390721395067724,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.045390721395067724,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xf766c7293f4e0265dDfA8369F78a808dF8AC70c1",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1006609",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0xb6246cB8c98A59A753A94c8E16ac54eADb392E40",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ynETH-B-f",
        "name": "Curve ynETH-B Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x19B8524665aBAC613D82eCE5D8347BA44C714bDd",
            "name": "ynETH/wstETH",
            "symbol": "ynETH-B",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 5312.821795310238
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.01745419978144064,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.019299999999999998,
                    "boostedAPR": 0.00009355531271182382,
                    "baseAPR": 0.00003742212508472953,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xC40CD211cdE406c75C623E4661176988BE802B8e",
                "name": "StrategyConvexFactory-ynETH-B",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1723318703
                }
            },
            {
                "address": "0x4Bebb8f32746fDe32cAd44e1674F171524f7a9A2",
                "name": "StrategyCurveBoostedFactory-ynETH-B",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729338995,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xb6246cB8c98A59A753A94c8E16ac54eADb392E40",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-twocrypto-44/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x04D549bAfE83B8BdCCC8dF38F15b90199D20f1eE",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-tBTC-f",
        "name": "Curve tBTC Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xF95AAa7EBB1620e46221B73588502960Ef63dBa0",
            "name": "Curve tBTC Pool",
            "symbol": "TBTCSBTC23CRV-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains crvWSBTC and tBTC, from [Threshold](https://threshold.network).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 58397.305287
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x933DB62D99BE6F1f5638Ba4110417c1920AAFaB4",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1675451507
                }
            },
            {
                "address": "0x63E07f66425B25a9b5a054ad69BfDc8a5a05cc49",
                "name": "StrategyCurveBoostedFactory-TBTCSBTC23CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xC3302D155Dddd2E0C642CC7107AE737d048C14b4",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1694440799
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x04D549bAfE83B8BdCCC8dF38F15b90199D20f1eE",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-247/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x8078198Fc424986ae89Ce4a910Fc109587b6aBF3",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-3Crypto-f",
        "name": "Curve 3Crypto Factory yVault",
        "category": "Volatile",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
            "name": "Curve 3Crypto Pool",
            "symbol": "3Crypto",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains USDT, WBTC, and WETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "625100252155229726024",
            "tvl": 1082452.8159398157,
            "price": 1731.64674339471
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.10270559013618907
            },
            "pricePerShare": {
                "today": 1.102705590136189,
                "weekAgo": 1.102705590136189,
                "monthAgo": 1.102705590136189
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.005588138018180728,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0040999999999999995,
                    "boostedAPR": 0.0021090422424230315,
                    "baseAPR": 0.0008436168969692126,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x398c51c68989C5C0C193F17C387acD6a5E8e3a80",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1671640127
                }
            },
            {
                "address": "0x9D7CD0041ABd91f281E282Db3fba7A9Db9E4cC8b",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "416137443211848958728",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x9b5EA4Eb266D47B7056343335dae16B0573C2522",
                "name": "StrategyCurveBoostedFactory-crv3crypto",
                "details": {
                    "totalDebt": "625100252155229726024",
                    "totalLoss": "0",
                    "totalGain": "477168454257733125",
                    "performanceFee": 0,
                    "lastReport": 1730404619,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x8078198Fc424986ae89Ce4a910Fc109587b6aBF3",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1102705590136189023",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/tricrypto2/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xd901DCf4948a29d7D9D7E015AAF61591825AC267",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-mkcrvUSD-f",
        "name": "Curve mkcrvUSD-f Factory yVault",
        "category": "Prisma",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x3de254A0f838a844F727fee81040e0FA7884B935",
            "name": "Curve.fi Factory Plain Pool: mkUSD/crvUSD",
            "symbol": "mkcrvUSD-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "28819938068125170844434",
            "tvl": 28945.084286868376,
            "price": 1.0043423486354268
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.17135408389288598
            },
            "pricePerShare": {
                "today": 1.171354083892886,
                "weekAgo": 1.171354083892886,
                "monthAgo": 1.171354083892886
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "prisma",
                "netAPR": 0.3265929590585115,
                "composite": {
                    "boost": 1.764313984398126,
                    "poolAPY": 0.002,
                    "boostedAPR": 0,
                    "baseAPR": 0.0013118551256434685,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.32479295905851147
                }
            }
        },
        "strategies": [
            {
                "address": "0xBdFB1D6A8ABFa5Ac6Fbc60e7a0810D4fFEE36462",
                "name": "StrategyPrismaConvexFactory-mkcrvUSD-f",
                "details": {
                    "totalDebt": "28819938068125170844434",
                    "totalLoss": "0",
                    "totalGain": "514570850496257439481",
                    "performanceFee": 0,
                    "lastReport": 1729726439,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x228Fb23C0A06282023536Fe71347413A20a86a73",
                "name": "StrategyPrismaConvexFactory-mkcrvUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702352687
                }
            },
            {
                "address": "0x3a73F81433b150D9B7b960378302Ea965AfeB8e8",
                "name": "StrategyConvexFactory-mkcrvUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1701711971
                }
            },
            {
                "address": "0x4F261Ed6a8009Dc247cdDfcB17F4BF144e167503",
                "name": "StrategyCurveBoostedFactory-mkcrvUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494399
                }
            },
            {
                "address": "0x8F33a4654170a76252A537A9E0D1A8E470093faA",
                "name": "StrategyCurveBoostedFactory-mkcrvUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1701711971
                }
            },
            {
                "address": "0xecE5a1E6c01362b7976b8ff46dFA204fc5DF8a3f",
                "name": "StrategyPrismaConvexFactory-mkcrvUSD-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "34215626298927305872908",
                    "performanceFee": 0,
                    "lastReport": 1721755343
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xd901DCf4948a29d7D9D7E015AAF61591825AC267",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1171354083892885972",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-17/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x6c6371E15499FedCdadEE06ADc5b55680b3d0785",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-cbETH-frxETH-f",
        "name": "Curve cbETH-frxETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x548E063CE6F3BaC31457E4f5b4e2345286274257",
            "name": "Curve cbETH-frxETH-f",
            "symbol": "cbETHfrxET-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains cbETH and frxETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 5074.238642
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.010080000000000002,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.011200000000000002,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x70550Eed8A1Dd870628d13378AC5564edB810efA",
                "name": "StrategyCurveBoostedFactory-cbETHfrxET-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x7CC632a16D5C3Cc3b0fD30626BFB5D01Df2a737A",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719056615
                }
            },
            {
                "address": "0x4D011fe8da8dE1884C1F71E2Bce7CaEA394c4E1d",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1685706143
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x6c6371E15499FedCdadEE06ADc5b55680b3d0785",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-220/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x2D85Ac3F2AeD4f0A14DC6852f1725240E47Cfc1f",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-TryLSD-f",
        "name": "Curve TryLSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x2570f1bD5D2735314FC102eb12Fc1aFe9e6E7193",
            "name": "TryLSD",
            "symbol": "TryLSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "4719832607966986881",
            "tvl": 39293.305789523765,
            "price": 8325.14816800863
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.044444802494666515,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.030299999999999997,
                    "boostedAPR": 0.0190831138829628,
                    "baseAPR": 0.0076332455531851195,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x7b5Ec24b4708A2A0C2f3a4ae77bb89494679788d",
                "name": "StrategyCurveBoostedFactory-TryLSD",
                "details": {
                    "totalDebt": "4719832607966986881",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730257967,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x6134C9bDf7292f90b342Dcda05782B1b46D495f5",
                "name": "StrategyConvexFactory-TryLSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720647683
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x2D85Ac3F2AeD4f0A14DC6852f1725240E47Cfc1f",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-tricrypto-14/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xB9A0e5E211213bb15315e5E7D9B341DB5417e561",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-rev alUSD-f",
        "name": "Curve rev alUSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xF5a7906b41B858B66d3A7cBe167dF1fB43FfE977",
            "name": "rev alUSD",
            "symbol": "rev alUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.979594
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x168433bfcf74747054b43d8C197fA4d10c8C3eC2",
                "name": "StrategyCurveBoostedFactory-rev alUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x1C2Cf524941754b773bE1b252e7dcbcaB7Bc2336",
                "name": "StrategyConvexFactory-rev alUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1716917627
                }
            },
            {
                "address": "0xfa9ecd22C952A0C64Fe3DB36C94473F133e136E2",
                "name": "StrategyCurveBoostedFactory-rev alUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1716917627
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xB9A0e5E211213bb15315e5E7D9B341DB5417e561",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-122/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x4f86Bf06bB97B6619fD6B55C0369Fb4Ed16Cfb6E",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurveLend-crvUSD-sUSDe-f",
        "name": "Curve Lend crvUSD-sUSDe Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "description": "This token represents a Curve Llama Lend deposit LP. Holders earn interest from users borrowing their supplied crvUSD against the specified collateral, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Llama Lend market accepts [Ethena's](https://ethena.fi/) staked USDe (sUSDe) as collateral.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x4a7999c55d3a93dAf72EA112985e57c2E3b9e95D",
            "name": "Curve Vault for crvUSD",
            "symbol": "cvcrvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.001028
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xf8BEC61b5755e9492914cfFE9AFca3EC7BF9e7Ed",
                "name": "StrategyConvexFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207
                }
            },
            {
                "address": "0xB98a6559Ca082341b230E08d081C7f09bEE15BFa",
                "name": "StrategyCurveBoostedFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x4f86Bf06bB97B6619fD6B55C0369Fb4Ed16Cfb6E",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xd6b2f4F0586BCfc9B1bf5cD8E22546aDD7B81a64",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-T-ETH-f",
        "name": "Curve T-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xCb08717451aaE9EF950a2524E33B6DCaBA60147B",
            "name": "Curve T-ETH Pool",
            "symbol": "crvTETH",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains T and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss. T is the governance token of [Threshold](threshold.network).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "5345067064357730269",
            "tvl": 78.55158146755768,
            "price": 14.696089033449113
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 1.3127408990328098
            },
            "pricePerShare": {
                "today": 2.3127408990328098,
                "weekAgo": 2.3127408990328098,
                "monthAgo": 2.3127408990328098
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.12156444656742842,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0026,
                    "boostedAPR": 0.1324716072971427,
                    "baseAPR": 0.052988642918857076,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x708839892dF53207cDBE64ACC97e4e2e9c23eE80",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1677793199
                }
            },
            {
                "address": "0xE8Ac0Cd3D4274141BBdA2f1d929174137Bdb3789",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "23111395948387651694",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0x4D87fCD52A491C17952D5f1f321FEe0BD45BF470",
                "name": "StrategyCurveBoostedFactory-crvTETH",
                "details": {
                    "totalDebt": "5345067064357730269",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729274039,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xd6b2f4F0586BCfc9B1bf5cD8E22546aDD7B81a64",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "2312740899032810113",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/teth/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xa857aB5913BdA50B65d257aD13FC039afe02eC17",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-revPool-f",
        "name": "Curve revPool Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xdf9015472Ea23e3BeA6fbD6092915F9Ed6980a99",
            "name": "revPool",
            "symbol": "revPool",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.002151
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x47e0872AcC4F009FDC8422659eAF6fB0Da8482fC",
                "name": "StrategyCurveBoostedFactory-revPool",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x16Aad21Dfc1D10a957586F083cc0974a7684f39A",
                "name": "StrategyConvexFactory-revPool",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1716917819
                }
            },
            {
                "address": "0x7178fD2613351d0BB238a807CCa309bbE3B59651",
                "name": "StrategyCurveBoostedFactory-revPool",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1716917819
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xa857aB5913BdA50B65d257aD13FC039afe02eC17",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-119/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xC2ADaD1Bd59a1DA3D35bd86cDb555694372f488F",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-MIM-crvUSD-f",
        "name": "Curve MIM-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xBe426b0f37c112dd20d5866769c8034171567b31",
            "name": "Curve crvUSD-MIM Pool",
            "symbol": "crvUSDMIM-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains MIM and crvUSD, a dollar pegged stablecoin from [Curve Finance](https://crvusd.curve.fi/#/ethereum/markets).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "210668105566295441215",
            "tvl": 210.51284317249306,
            "price": 0.999263
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.7860112080375341
            },
            "pricePerShare": {
                "today": 1.786011208037534,
                "weekAgo": 1.786011208037534,
                "monthAgo": 1.786011208037534
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 1.161785284235902,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xf74ea2b82b21744cD2bFF978ac52A9D635018d39",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1191510473276125129977",
                    "performanceFee": 0,
                    "lastReport": 1719321371
                }
            },
            {
                "address": "0x2F3B27139E7a3f2430ABCf9B6E986a0f11104d27",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1693946999
                }
            },
            {
                "address": "0xEaF60dC93afe3e04FDa8f612840E2700f3D243E8",
                "name": "StrategyCurveBoostedFactory-crvUSDMIM-f",
                "details": {
                    "totalDebt": "210668105566295441215",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729280147,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xC2ADaD1Bd59a1DA3D35bd86cDb555694372f488F",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1786011208037534200",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-6/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x8Aa95B71D8e0e1C7949bd84223E0C7911D85171C",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-RSR-FRAXBP-f",
        "name": "Curve RSR-FRAXBP Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x3F436954afb722F5D14D868762a23faB6b0DAbF0",
            "name": "Curve RSR FRAXBP Pool",
            "symbol": "RSRcrvFRAX-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains RSR, FRAX, and USDC. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.15612660199017597
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crvfrax",
                "netAPR": 1.5289072159450264e+73,
                "composite": {
                    "boost": 1.8942517897330005,
                    "poolAPY": 0.00724,
                    "boostedAPR": 22090.361985670057,
                    "baseAPR": 0.009306710748863134,
                    "cvxAPR": 326.4622512525623,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x649A1Bc583298F91E59540cF70b54D898Db33091",
                "name": "StrategyCurveBoostedFactory-RSRcrvFRAX-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494255,
                    "debtRatio": 2000
                }
            },
            {
                "address": "0xBD908f8D08438e4CfE773BDe0a2a8d39bcD74F7d",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1686189575
                }
            },
            {
                "address": "0x1999A16Ac3E128B5E4603844F631a23fd865a0b9",
                "name": "Convex Frax Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV and veFXS to earn CRV, CVX, and FXS (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1717725611,
                    "debtRatio": 8000
                }
            },
            {
                "address": "0xea05C573aa00E7E67F72b9aB4c7574b25f586007",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1717725635
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x8Aa95B71D8e0e1C7949bd84223E0C7911D85171C",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-136/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x3f34A7eF4f17528CbFFb7817060941BCdaC924fa",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-TriCRV-f",
        "name": "Curve TriCRV Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x4eBdF703948ddCEA3B11f675B4D1Fba9d2414A14",
            "name": "TricryptoCRV",
            "symbol": "crvUSDETHCRV",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains crvUSD, wETH, and CRV. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1990028171856189863369",
            "tvl": 55424.763685371574,
            "price": 27.851245760844872
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.3758259641712527
            },
            "pricePerShare": {
                "today": 1.3758259641712527,
                "weekAgo": 1.3758259641712527,
                "monthAgo": 1.3758259641712527
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.06970524202630285,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0063,
                    "boostedAPR": 0.07115026891811427,
                    "baseAPR": 0.028460107567245707,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xc3715E4A6EB545D8A1d82e7E5b727831c0058bE6",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1971248517691228054080",
                    "performanceFee": 0,
                    "lastReport": 1719490679
                }
            },
            {
                "address": "0xE318Fc9EEC4C9aec494B3DA06e6D97fE07B2C98b",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1691070923
                }
            },
            {
                "address": "0xE403f03eee3aa19156Eb13fb6edd9e77dE62b89E",
                "name": "StrategyCurveBoostedFactory-crvUSDETHCRV",
                "details": {
                    "totalDebt": "1990028171856189863369",
                    "totalLoss": "0",
                    "totalGain": "262774510046635545240",
                    "performanceFee": 0,
                    "lastReport": 1730082575,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x3f34A7eF4f17528CbFFb7817060941BCdaC924fa",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1375825964171252696",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-tricrypto-4/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x832c30802054F60f0CeDb5BE1F9A0e3da2a0Cab4",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDS",
        "name": "Aave V3 USDS Lender",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Supplies {{token}} to [Aave V3](https://app.aave.com/) to generate interest and earn any applicable rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
            "name": "USDS Stablecoin",
            "symbol": "USDS",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "203660094238728671999806",
            "tvl": 203658.66861806903,
            "price": 0.999993
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 14.182084619381202,
                "monthAgo": 0,
                "inception": 0.28192313818751447
            },
            "pricePerShare": {
                "today": 1.2819231381875145,
                "weekAgo": 1.0078129476879747,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.057759173898915606,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.057759173898915606,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x832c30802054F60f0CeDb5BE1F9A0e3da2a0Cab4",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1281917767734304999",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0xcc209a1c5a3757597497C83d62D1d6B6a2c7395F",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-rsETH",
        "name": "yPT-rsETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
            "name": "rsETH",
            "symbol": "rsETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2508.53
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.04750727857304082,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.04750727857304082
                }
            }
        },
        "strategies": [
            {
                "address": "0xBEa0e4e3BB590f4D7a2E3AfA0463f28c55e106b2",
                "name": "yPT-rsETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719079943
                }
            },
            {
                "address": "0x8c59B53C75B44d750ca8076dc2D9086aD73190d5",
                "name": "yPT-rsETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719079955
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xcc209a1c5a3757597497C83d62D1d6B6a2c7395F",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0xbA8e83CC28B54bB063984033Df20F9a9F1220C24",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-cvcrvUSD-f",
        "name": "Curve Lend crvUSD-wstETH Factory",
        "category": "Curve",
        "version": "0.4.6",
        "description": "This token represents a Curve Llama Lend deposit LP. Holders earn interest from users borrowing their supplied crvUSD against the specified collateral, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Llama Lend market accepts wstETH as collateral.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x21CF1c5Dc48C603b89907FE6a7AE83EA5e3709aF",
            "name": "Curve Vault for crvUSD",
            "symbol": "cvcrvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "38814510862711553320016937",
            "tvl": 38853.32537357426,
            "price": 0.001001
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x33ABe2804f1779fda406F49071Fe2F931CA2a5C5",
                "name": "StrategyConvexFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719790211
                }
            },
            {
                "address": "0x76Cb781D1Bc67af40aD0cec564b232d131343530",
                "name": "StrategyCurveBoostedFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "38814510862711553320016937",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730365979,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xbA8e83CC28B54bB063984033Df20F9a9F1220C24",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xb3CA5C531BCaF94C3575500DA16b7e219b910224",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-2BTC-f",
        "name": "Curve 2BTC-f Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xB7ECB2AA52AA64a717180E030241bC75Cd946726",
            "name": "Curve.fi Factory Plain Pool: tBTC/WBTC",
            "symbol": "2BTC-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 68589.64719019932
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.005769527138619415,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0054,
                    "boostedAPR": 0.0010105857095771276,
                    "baseAPR": 0.000404234283830851,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xB4CDe3954A10619bfebaf4671B519ACfCa0346c1",
                "name": "StrategyCurveBoostedFactory-2BTC-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1725329759,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x7e7F3219FC4B9B21500cbc5E9dAac0406177EdE0",
                "name": "StrategyConvexFactory-2BTC-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1725329759
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xb3CA5C531BCaF94C3575500DA16b7e219b910224",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-16/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x6a7A0481e476827857704B87bdeE7922D058cbE4",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-hyUSD-eUSD-f",
        "name": "Curve hyUSD-eUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xc794C6A95f30d0ebF7B3Bbe85e8a0A95C9e411c1",
            "name": "Curve hyUSD-eUSD Pool",
            "symbol": "hyUSDeUSD-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains hyUSD and eUSD. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "4623096644706277084907",
            "tvl": 9413.674211560328,
            "price": 2.036227
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.4415226924589353
            },
            "pricePerShare": {
                "today": 1.4415226924589353,
                "weekAgo": 1.4415226924589353,
                "monthAgo": 1.4415226924589353
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.006101467026747905,
                "composite": {
                    "boost": 1.1541803907656607,
                    "poolAPY": 0,
                    "boostedAPR": 0.006779407807497672,
                    "baseAPR": 0.005873785295382072,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x734D102a18A3C0AE16f5Ae1df62fc4373E306ad8",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1686187535
                }
            },
            {
                "address": "0xd7d8D874a79363Cd46668A40693c4d15b6Ccaa5d",
                "name": "StrategyCurveBoostedFactory-hyUSDeUSD-f",
                "details": {
                    "totalDebt": "4623096644706277084907",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730404775,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x8dCf2FF7F2ab5fC16eF51cc04D6f65F2535745A2",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "38774610644815709974778",
                    "performanceFee": 0,
                    "lastReport": 1719492875
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x6a7A0481e476827857704B87bdeE7922D058cbE4",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1441522692458935393",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-252/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xbDAc8353b03a883654d19fF60c8fcdc1A52f0bE2",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-weETH",
        "name": "yPT-weETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
            "name": "Wrapped eETH",
            "symbol": "weETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "200989816670798325",
            "tvl": 519.4813749778514,
            "price": 2584.6153978473
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.04280340999259469,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.04280340999259469
                }
            }
        },
        "strategies": [
            {
                "address": "0x180E20403e5b72b9d7941e3BF00D738593BE87ed",
                "name": "yPT-weETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719178703
                }
            },
            {
                "address": "0xadC0078650b703548FFd4e2536D7816C2cB73C64",
                "name": "yPT-weETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "200989816670798325",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719178679,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xbDAc8353b03a883654d19fF60c8fcdc1A52f0bE2",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0xa8E0c42F45C877e611C76F2D4bF57476f2014381",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-IronBank-f",
        "name": "Curve Iron Bank Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
            "name": "Curve Iron Bank Pool",
            "symbol": "crvIB",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains DAI, USDC, and USDT that are lent out to the Iron Bank, a decentralized money market on Ethereum launched collaboratively by C.R.E.A.M. Finance and Yearn Finance.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "76649129660480620382959",
            "tvl": 111385.46197686583,
            "price": 1.4531862588688316
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.0201416872525495
            },
            "pricePerShare": {
                "today": 1.0201416872525495,
                "weekAgo": 1.0201416872525495,
                "monthAgo": 1.0201416872525495
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.4795090124339925,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.5306000000000001,
                    "boostedAPR": 0.0021877915933249392,
                    "baseAPR": 0.0008751166373299757,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x40B24E1AA1582F4def4f74E258906f3BDBfF0093",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "8395069292967061849082",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0xFaFc64E627d9CD4Bb2a32C818ff9F291C3DCedb8",
                "name": "StrategyCurveBoostedFactory-ib3CRV",
                "details": {
                    "totalDebt": "76649129660480620382959",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730404643,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xfC95d48bBbD35044d7a9c23F6068B6B2148E02c8",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1672372055
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xa8E0c42F45C877e611C76F2D4bF57476f2014381",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1020141687252549509",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/ib/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xBA4080a3603299fa82903F841AA602a61b389551",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-zunUSD-crvUSD-f",
        "name": "Curve zunUSD-crvUSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x8C24b3213FD851db80245FCCc42c40B94Ac9a745",
            "name": "crvUSD/zunUSD",
            "symbol": "CRVZUNUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.0078903401617567
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.13867318965584038,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0369,
                    "boostedAPR": 0.11718132183982266,
                    "baseAPR": 0.046872528735929064,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x8F7c6008D523575986Af545d79925cc7932586Dc",
                "name": "StrategyCurveBoostedFactory-CRVZUNUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1714115351
                }
            },
            {
                "address": "0x18f356b47A0f288Fcf31C4F7747B619377317D92",
                "name": "StrategyConvexFactory-CRVZUNUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1714115351
                }
            },
            {
                "address": "0x8a6Eb4f82b4d6D8aa907BE67861e3E3855015Fc3",
                "name": "StrategyCurveBoostedFactory-CRVZUNUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xBA4080a3603299fa82903F841AA602a61b389551",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-104/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x1C97e67Dc7ca179aE82E0c4AFF4Af9ff66612A43",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-PAL-ETH-f",
        "name": "Curve PAL-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xbE4f3AD6C9458b901C81b734CB22D9eaE9Ad8b50",
            "name": "Curve PAL-ETH Pool",
            "symbol": "PALETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains PAL and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss. hPAL is [Paladin](https://paladin.vote)'s governance token.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2111377151202968465",
            "tvl": 39.377169966756476,
            "price": 18.649993415113507
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 1.3609882524419072
            },
            "pricePerShare": {
                "today": 2.3609882524419072,
                "weekAgo": 2.3609882524419072,
                "monthAgo": 2.3609882524419072
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.23657900929576503,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0005,
                    "boostedAPR": 0.26236556588418336,
                    "baseAPR": 0.10494622635367334,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x5ec784371370F0f7Da729C9F7713eEE478D5e528",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1679544719
                }
            },
            {
                "address": "0xb0FB81367Bc6aae87987ECDa1A696626020D6681",
                "name": "StrategyCurveBoostedFactory-PALETH-f",
                "details": {
                    "totalDebt": "2111377151202968465",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279091,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xEf64Aee095722aDd25dc27E28537474D1e5E3B21",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "8942768558967742645",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x1C97e67Dc7ca179aE82E0c4AFF4Af9ff66612A43",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "2360988252441907335",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-38/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x82c83ddA32DB09F63F9A59A129278f3fdC3EeE67",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-3EUR-f",
        "name": "Curve 3EUR Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xb9446c4Ef5EBE66268dA6700D26f96273DE3d571",
            "name": "Curve 3EUR Pool",
            "symbol": "crv3EUR",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains agEUR, EURT, and EURS. agEUR is a synthetic Euro issued by [Angle Protocol](https://angle.money), while EURS and EURT are both centralized, hard-pegged Euro tokens issued by Stasis and Tether, respectively.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "26032384878017757594888",
            "tvl": 28544.23846951673,
            "price": 1.0964895687916796
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.2588420849345745
            },
            "pricePerShare": {
                "today": 1.2588420849345745,
                "weekAgo": 1.2588420849345745,
                "monthAgo": 1.2588420849345745
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.10003424543912849,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.011200000000000002,
                    "boostedAPR": 0.09994916159903165,
                    "baseAPR": 0.039979664639612666,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x34b7BF2825deaEAe1f2D43ee374D4eea6881cB05",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "33973747806533178348478",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0x92272902E2BfA8F3809Ed6baB5F21876c8DD634B",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1443273343240404903165",
                    "performanceFee": 0,
                    "lastReport": 1717709543
                }
            },
            {
                "address": "0x95774D83D1c6d79Af44758E3fB6cc9Acb694B22c",
                "name": "StrategyCurveBoostedFactory-3EURpool-f",
                "details": {
                    "totalDebt": "26032384878017757594888",
                    "totalLoss": "0",
                    "totalGain": "910390045574313310298",
                    "performanceFee": 0,
                    "lastReport": 1730404559,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x86f4efB293391a68DbC26F9D3df0b314F43735Ab",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "559477355611876461904",
                    "performanceFee": 0,
                    "lastReport": 1708798667
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x82c83ddA32DB09F63F9A59A129278f3fdC3EeE67",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1258842084934574647",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-66/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xe80Cc7b2b69f32999766c1a0035ab77E8fb5B99C",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-cvxFXS-f",
        "name": "Curve cvxFXS Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xF3A43307DcAFa93275993862Aae628fCB50dC768",
            "name": "Curve cvxFXS-FXS Pool",
            "symbol": "cvxFXSFXS-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains FXS and cvxFXS, a tokenized veFXS from [Convex Finance](https://frax.convexfinance.com).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2.588796593617019
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.017007349313591033,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0068000000000000005,
                    "boostedAPR": 0.012097054792878925,
                    "baseAPR": 0.00483882191715157,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xCEA8c51b26b66Be8FedBfE214A6Bda33fBDcD7cD",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1679035067
                }
            },
            {
                "address": "0x383AAB29786E475C900CEA49691934a89DbbEa8B",
                "name": "StrategyCurveBoostedFactory-cvxFXSFXS-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xEDaD1292557233B1f3615125425CF93Fd7dedD51",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1693928411
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xe80Cc7b2b69f32999766c1a0035ab77E8fb5B99C",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-18/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x873fB544277FD7b977B196a826459a69E27eA4ea",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvRAI",
        "name": "RAI yVault",
        "category": "Stablecoin",
        "version": "0.4.2",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
            "name": "Rai Reflex Index",
            "symbol": "RAI",
            "description": "RAI is a non pegged, ETH backed stable asset built by Reflexer. It is the first asset of its kind that, instead of being pegged to a specific target such as the USD, it freely floats while it's being influenced by market forces. RAI's mission is to become a crypto native and governance minimized stable asset that is detached from fiat.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2305029849953107027053",
            "tvl": 6966.934455610394,
            "price": 3.022492075645844
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.0030018515272454143
            },
            "pricePerShare": {
                "today": 1.0030018515272454,
                "weekAgo": 1.0030018515272454,
                "monthAgo": 1.0030018515272454
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x5D411D2cde10e138d68517c42bE2808C90c22026",
                "name": "StrategyIdleidleRAIYield",
                "details": {
                    "totalDebt": "2305029849953107027053",
                    "totalLoss": "0",
                    "totalGain": "1864021935324266049307",
                    "performanceFee": 0,
                    "lastReport": 1629866495,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x873fB544277FD7b977B196a826459a69E27eA4ea",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1003001851527245298",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x602DA189F5aDa033E9aC7096Fc39C7F44a77e942",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDC",
        "name": "USDC to yvUSDS Depositor",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Invests the USDC through MakerDAO's Peg Stability Module (PSM) and Sky into USDS and farms yearn's USDS vault for yield.",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "name": "USD Coin",
            "symbol": "USDC",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "2074507073761",
            "tvl": 2076581.5808347608,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.0430687079387615,
                "monthAgo": 0,
                "inception": 0.0008559999999999679
            },
            "pricePerShare": {
                "today": 1.000856,
                "weekAgo": 1.00003,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.06072401815248374,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.06072401815248374,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x602DA189F5aDa033E9aC7096Fc39C7F44a77e942",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000845",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                3,
                3,
                1,
                2,
                2,
                2,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0x7e113c504263354ba99290dadAd00D1e1F2b6476",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-sdFXS-f",
        "name": "Curve sdFXS Factory yVault",
        "category": "Curve",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x8c524635d52bd7b1Bd55E062303177a7d916C046",
            "name": "Curve sdFXS-FXS Pool",
            "symbol": "sdFXSFXS-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains FXS and sdFXS, a tokenized veFXS from [StakeDAO](https://lockers.stakedao.org).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "96233275463947196244",
            "tvl": 161.23654344123239,
            "price": 1.675476
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 2.6763169491177967
            },
            "pricePerShare": {
                "today": 3.6763169491177967,
                "weekAgo": 3.6763169491177967,
                "monthAgo": 3.6763169491177967
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0xbc62395e5a07570e3c39981066FDb16818F3bF72",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1673538611
                }
            },
            {
                "address": "0x8E77Fb0C4A6550eEAa1D51766f8aE10e5b579B12",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "266743674484765104285",
                    "performanceFee": 0,
                    "lastReport": 1718232179
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x7e113c504263354ba99290dadAd00D1e1F2b6476",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "3676316949117797092",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-100/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x04AeBe2e4301CdF5E9c57B01eBdfe4Ac4B48DD13",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yvmkUSD-A",
        "name": "mkUSD-A",
        "category": "Stablecoin",
        "version": "3.0.1",
        "description": "Multi strategy mkUSD vault. \u003cbr/\u003e\u003cbr/\u003eMulti strategy vaults are (wait for it) vaults that contain multiple strategies. Multi strategy vaults give the vault creator flexibility to balance risk and opportunity across multiple different strategies.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x4591DBfF62656E7859Afe5e45f6f47D3669fBB28",
            "name": "Prisma mkUSD",
            "symbol": "mkUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "95674920795005591836312",
            "tvl": 95010.74549484666,
            "price": 0.993058
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x04AeBe2e4301CdF5E9c57B01eBdfe4Ac4B48DD13",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xF0825750791A4444c5E70743270DcfA8Bb38f959",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysDAI",
        "name": "Aave V3 DAI Lender",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Supplies {{token}} to [Aave V3](https://app.aave.com/) to generate interest and earn any applicable rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "name": "Dai Stablecoin",
            "symbol": "DAI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "124349107272460603044720",
            "tvl": 124473.45637973305,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 7.081844538748597,
                "monthAgo": 0,
                "inception": 0.13581619663353472
            },
            "pricePerShare": {
                "today": 1.1358161966335347,
                "weekAgo": 1,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.06351343764632955,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.06351343764632955,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xF0825750791A4444c5E70743270DcfA8Bb38f959",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1135770814567671248",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0xe8b96C38a0b370eAfb11D9b8Df4131415423577a",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-STBT-f",
        "name": "Curve STBT Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x892D701d94a43bDBCB5eA28891DaCA2Fa22A690b",
            "name": "Curve STBT-3CRV Pool",
            "symbol": "STBT3CRV-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains 3Crv (DAI, USDC, USDT) and STBT. STBT is a Short-term Treasury Bill token from [MatrixDock](https://www.matrixdock.com/home) which enables you to get exposure to U.S. Treasury securities maturing within six months.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.05421
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.03006,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0334,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x0E43f8c08a8661456F90D44Bda171c46a632c3D4",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1688334635
                }
            },
            {
                "address": "0xD54da0f015083F8d3efE7d15ac5d69da684D0283",
                "name": "StrategyCurveBoostedFactory-STBT3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494255,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x3b9930c0d5f45B2fF2fd127895883fd81dbAE865",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1687038971
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xe8b96C38a0b370eAfb11D9b8Df4131415423577a",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-279/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x00e8Eb340f8AF587EEA6200D2081E31dC87285ac",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-XAI-FRAXBP-f",
        "name": "Curve XAI-FRAXBP Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x326290A1B0004eeE78fa6ED4F1d8f4b2523ab669",
            "name": "Curve XAI-FRAXBP Pool",
            "symbol": "XAIFRAXBP3CRV-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Curve factory liqudity pool contains FRAX, XAI, and USDC.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "219221905054635332527",
            "tvl": 219.1817045667902,
            "price": 0.9998166219391482
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.057941945495950435
            },
            "pricePerShare": {
                "today": 1.0579419454959504,
                "weekAgo": 1.0579419454959504,
                "monthAgo": 1.0579419454959504
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crvfrax",
                "netAPR": 13.252462171095598,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.00184,
                    "boostedAPR": 2.564016630300727,
                    "baseAPR": 0.01281393462350633,
                    "cvxAPR": 0.03779762345370798,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x2427e9E6C6ec0Fe3Baf9B42516d61CeE7a2ef769",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "467062124555933904715",
                    "performanceFee": 0,
                    "lastReport": 1717370939
                }
            },
            {
                "address": "0xA48e7a7e205147b6B0DD053Ad8401FB36c1C2d3A",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1673316959
                }
            },
            {
                "address": "0x9c17002B2C4c997BA98Bb5083eb24e180519594F",
                "name": "StrategyCurveBoostedFactory-XAIFRAXBP3CRV-f",
                "details": {
                    "totalDebt": "43844381010927066505",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729273991,
                    "debtRatio": 2000
                }
            },
            {
                "address": "0x3493C07A475C7298b4D040E52b1e65713BF4dCB9",
                "name": "Convex Frax Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV and veFXS to earn CRV, CVX, and FXS (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1704538223
                }
            },
            {
                "address": "0x9C924EE29070964CD7Afde32CD6FDcA620511747",
                "name": "Convex Frax Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV and veFXS to earn CRV, CVX, and FXS (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "175377524043708266021",
                    "totalLoss": "0",
                    "totalGain": "1636052309207577099758",
                    "performanceFee": 0,
                    "lastReport": 1719059171,
                    "debtRatio": 8000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x00e8Eb340f8AF587EEA6200D2081E31dC87285ac",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1057941945495950500",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-223/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xc52d44abA4B7739173821afF175aEb53367E629E",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ZUSDFBP3CRV-f",
        "name": "Curve ZUSDFBP3CRV-f Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x400d4C984779A747462e88373c3fE369EF9F5b50",
            "name": "Curve.fi Factory USD Metapool: ZUSDFRAXBP",
            "symbol": "ZUSDFBP3CRV-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.002764222334939
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crvfrax",
                "netAPR": 0.13923366278995014,
                "composite": {
                    "boost": 1.9261053365896403,
                    "poolAPY": 0.0011000000000000003,
                    "boostedAPR": 0.11923035357211315,
                    "baseAPR": 0.015418817711644552,
                    "cvxAPR": 0.001648111803996699,
                    "rewardsAPR": 0.02404257183789338
                }
            }
        },
        "strategies": [
            {
                "address": "0x0Ec3FaC1e5EfF88ED5C06e09F015a8a68032Cb73",
                "name": "StrategyCurveBoostedFactory-ZUSDFBP3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1724511563,
                    "debtRatio": 2000
                }
            },
            {
                "address": "0xd16250A42a8Ce4d5D4d83eb17Ffb2913547A8e81",
                "name": "StrategyConvexFactory-ZUSDFBP3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1724511563
                }
            },
            {
                "address": "0x1161B0bA29a88F014f1c8C1aC94498926283aAE0",
                "name": "StrategyConvexFraxFactory-ZUSDFBP3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1724511563,
                    "debtRatio": 8000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xc52d44abA4B7739173821afF175aEb53367E629E",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-305/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xf70B3F1eA3BFc659FFb8b27E84FAE7Ef38b5bD3b",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-dYFIETH-f",
        "name": "Curve dYFIETH-f Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xE8449F1495012eE18dB7Aa18cD5706b47e69627c",
            "name": "Curve.fi Factory Crypto Pool: dYFI/ETH",
            "symbol": "dYFIETH-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "98431793328174405448",
            "tvl": 552195.0118011982,
            "price": 5609.925341501849
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": 1.2127733728288983,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "convexcrv",
                "netAPR": 0.00037647900000000004,
                "composite": {
                    "boost": 1.8988827364582872,
                    "poolAPY": 0.00041830999999999997,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xD9008Eae1cd4B25D87ca844bD936609c1433dfa2",
                "name": "StrategyCurveBoostedFactory-dYFIETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x70d9af6694B5bf9D0d2da43c3A13D609FacA59c2",
                "name": "StrategyConvexFactory-dYFIETH-f",
                "details": {
                    "totalDebt": "80408931969785671810",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730543903,
                    "debtRatio": 8169
                }
            },
            {
                "address": "0xf5309B37B07250Fa261B2a9c30C85AD942D6CcAB",
                "name": "StrategyCurveBoostedFactory-dYFIETH-f",
                "details": {
                    "totalDebt": "16511224588559094835",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729142795,
                    "debtRatio": 1831
                }
            }
        ],
        "staking": {
            "address": "0x28da6dE3e804bDdF0aD237CFA6048f2930D0b4Dc",
            "available": true,
            "source": "VeYFI",
            "rewards": [
                {
                    "address": "0x41252E8691e964f7DE35156B68493bAb6797a275",
                    "name": "Discount YFI",
                    "symbol": "dYFI",
                    "decimals": 18,
                    "price": 3187.2419723344524,
                    "isFinished": false,
                    "finishedAt": 1731472331,
                    "apr": 1.2127733728288983,
                    "perWeek": 0
                }
            ]
        },
        "migration": {
            "available": false,
            "address": "0xf70B3F1eA3BFc659FFb8b27E84FAE7Ef38b5bD3b",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-317/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x708c42E0236fe8f5916C5638a462Ee83DA99d07b",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-LDO-ETH-f",
        "name": "Curve LDO-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xb79565c01b7Ae53618d9B847b9443aAf4f9011e7",
            "name": "Curve LDO-ETH Pool",
            "symbol": "LDOETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains LDO and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss. LDO is [Lido Finance](https://lido.fi)'s governance token.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "4992420522834876996",
            "tvl": 504.0062914664854,
            "price": 100.95429444719379
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.03358003965433709
            },
            "pricePerShare": {
                "today": 1.033580039654337,
                "weekAgo": 1.033580039654337,
                "monthAgo": 1.033580039654337
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.01017363760553014,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0037,
                    "boostedAPR": 0.007604041783922377,
                    "baseAPR": 0.003041616713568951,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x0010FDdc0270A5b6C158535be50a24B4E138e6AB",
                "name": "StrategyCurveBoostedFactory-LDOETH-f",
                "details": {
                    "totalDebt": "4992420522834876996",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279739,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x0b2bF26D93233d9547bAc9aEb7f0dF588DBcF0A4",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "2050286338442153155",
                    "performanceFee": 0,
                    "lastReport": 1719321179
                }
            },
            {
                "address": "0x6ea5478f3d26175499579D3Af0cdE2490eca44F3",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1681152911
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x708c42E0236fe8f5916C5638a462Ee83DA99d07b",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1033580039654337144",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-204/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x65346970F0f66CCAd8a5bfc3a03C96836C1897bE",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-DUSD-f",
        "name": "Curve DUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
            "name": "Curve DUSD Pool",
            "symbol": "crvDUSD",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This metapool contains 3Crv (DAI, USDC, and USDT) and DUSD.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1034328776216697439545",
            "tvl": 1373.3569272509535,
            "price": 1.3277760020119829
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.013676160295306827
            },
            "pricePerShare": {
                "today": 1.0136761602953068,
                "weekAgo": 1.0136761602953068,
                "monthAgo": 1.0136761602953068
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.39914887343865674,
                "composite": {
                    "boost": 1.6005785633883338,
                    "poolAPY": 0.0007000000000000001,
                    "boostedAPR": 0.4427987482651742,
                    "baseAPR": 0.27664918073611733,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xeca7358714459402d0aFB16F96617cB855ba7030",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "966647825203430366885",
                    "performanceFee": 0,
                    "lastReport": 1719321083
                }
            },
            {
                "address": "0x1BC4129c34cCd83200D7E02A7B040Ed3d1c198a4",
                "name": "StrategyCurveBoostedFactory-dusd3CRV",
                "details": {
                    "totalDebt": "1034328776216697439545",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279139,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xFaba5d509234c32C32F309c48a1420E083D97fFA",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1691016515
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x65346970F0f66CCAd8a5bfc3a03C96836C1897bE",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1013676160295306884",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/dusd/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x98b72deBe9BEdCc11aF3f1f5BFAc6994aac43786",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-dgnETHETH+-f",
        "name": "Curve dgnETH-ETH+ Factory",
        "category": "Curve",
        "version": "0.4.6",
        "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains two different Reserve RTokens, dgnETH and ETH+. These RTokens are 100% backed by a diversified set of underlying collateral tokens, all pegged to ETH. For more details, check out Reserve's [website](https://app.reserve.org/compare).",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x021cF6B7ebb8c8EFcF21396Eb4c94658976172c7",
            "name": "dgnETH/ETH+",
            "symbol": "dgnETHETH+",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2466.8138949716017
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.01557,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0173,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xe6840c6965FfCe6accbD306a8621938d6c805d12",
                "name": "StrategyConvexFactory-dgnETHETH+",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719934907
                }
            },
            {
                "address": "0x4C39e5CC71DE6a9d84359fADDf21860f8d0E7Ae6",
                "name": "StrategyCurveBoostedFactory-dgnETHETH+",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730331491,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x98b72deBe9BEdCc11aF3f1f5BFAc6994aac43786",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-174/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x66A7024fC367eBa201dF1381A9B6305d1e90919A",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-mkUSD-USDe-f",
        "name": "Curve mkUSD-USDe Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x1ab3D612EA7df26117554ddDD379764EBcE1A5Ad",
            "name": "mkUSDUSDe",
            "symbol": "mkUSDUSDe",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.9966484502744486
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.20270698540831883,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0005,
                    "boostedAPR": 0.22472998378702091,
                    "baseAPR": 0.08989199351480837,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xB1A17F61e79E397048f919004770388b7D76Ba21",
                "name": "StrategyCurveBoostedFactory-mkUSDUSDe",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1712870279
                }
            },
            {
                "address": "0xe46BFcA31788014C643C7de02Cd386Af6F96D2c8",
                "name": "StrategyConvexFactory-mkUSDUSDe",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710610103
                }
            },
            {
                "address": "0x3f97A8F6944163dbF0C9CE3a1800aE4B676605c5",
                "name": "StrategyCurveBoostedFactory-mkUSDUSDe",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x66A7024fC367eBa201dF1381A9B6305d1e90919A",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-68/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xF614d3864EF53510909a94c618a5EC1Ff75103BF",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-cbETH-f",
        "name": "Curve cbETH Factory yVault",
        "category": "Curve",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5b6C539b224014A09B3388e51CaAA8e354c959C8",
            "name": "Curve.fi Factory Crypto Pool: cbETH/ETH",
            "symbol": "cbETH/ETH-f",
            "description": "This token represents a curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This curve pool contains cbETH and ETH. cbETH is Coinbase's staked ETH token for ETH 2.0 staking yields.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "146276032055278512",
            "tvl": 757.8862709911042,
            "price": 5181.2061097247615
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.04722774060346935
            },
            "pricePerShare": {
                "today": 1.0472277406034693,
                "weekAgo": 1.0472277406034693,
                "monthAgo": 1.0472277406034693
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.013590000000000001,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.0151,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xeC144C04a01820e05c93cCC385d54a760c5b3A61",
                "name": "StrategyCurveBoostedFactory-cbETH/ETH-f",
                "details": {
                    "totalDebt": "146276032055278512",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729280039,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x9BD0D6C7a1f770d513dD9b7dde45e56c8ed81002",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "108204468471157843",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0xc9c5b887e984BB4914574755D12c997e4aE2D88F",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1671639983
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xF614d3864EF53510909a94c618a5EC1Ff75103BF",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1047227740603469469",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-91/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x82e75Cf176C18DCCeF1b05B0F1d89a444a3A1005",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USDe-FRAX-f",
        "name": "Curve USDe-FRAX Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x5dc1BF6f1e983C0b21EfB003c105133736fA0743",
            "name": "FRAXUSDe",
            "symbol": "FRAXUSDe",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.9989871308726161
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.003825011852225698,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0012,
                    "boostedAPR": 0.003050013169139665,
                    "baseAPR": 0.001220005267655866,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x8CC41984D06a2A21e9B542c39B7c4f1537CDD905",
                "name": "StrategyCurveBoostedFactory-FRAXUSDe",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xb938734509721b89003C551906109196A7263AC1",
                "name": "StrategyCurveBoostedFactory-FRAXUSDe",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1712444039
                }
            },
            {
                "address": "0xcdF3455C53cdE19Cf85d29BF6220Df4B41148DEF",
                "name": "StrategyConvexFactory-FRAXUSDe",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710610103
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x82e75Cf176C18DCCeF1b05B0F1d89a444a3A1005",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-35/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xc97232527B62eFb0D8ed38CF3EA103A6CcA4037e",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "lp-yCRV",
        "name": "LP Yearn CRV Vault",
        "category": "Curve",
        "version": "0.4.3",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x453D92C7d4263201C69aACfaf589Ed14202d83a4",
            "name": "Curve yCRV Pool",
            "symbol": "yCRV-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains yCRV and CRV. CRV is Curve's governance token, and yCRV is Yearn's new liquid veCRV wrapper, redesigned from the ground up to give users 'the best CRV yields in DeFi'.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "548070351025357123362664",
            "tvl": 128281.89443134611,
            "price": 0.234061
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.1984797038063313
            },
            "pricePerShare": {
                "today": 1.1984797038063313,
                "weekAgo": 1.1984797038063313,
                "monthAgo": 1.1984797038063313
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0xBec29b45033fC6e98abF3DD7Ad20B8255978e1F1",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "172812357093882079977993",
                    "performanceFee": 0,
                    "lastReport": 1719795107
                }
            },
            {
                "address": "0xdA7A4D8868445CBf7769FbA50a1A7185255f2cc2",
                "name": "Generic Migration",
                "description": "Tailor-made strategy to migrate to newer version of a deprecated vault.",
                "details": {
                    "totalDebt": "531138044951900880983492",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1689031175
                }
            },
            {
                "address": "0xF81Ad33A29c7A85cd9fBE4F3E96dFDe50C7565fF",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in the gauge directly to collect any available tokens. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "100695754896612489476957",
                    "performanceFee": 0,
                    "lastReport": 1688994827
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": true,
            "address": "0x6E9455D109202b426169F0d8f01A3332DAE160f3",
            "contract": "0xdc899AB992fbCFbac936CE5a5bC5A86a5d35A66a"
        },
        "featuringScore": 0,
        "pricePerShare": "1198479703806331371",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-192/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x3a51269E0707A3416044bad5066858A12198fCf5",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-CLEV-ETH-f",
        "name": "Curve CLEV-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6C280dB098dB673d30d5B34eC04B6387185D3620",
            "name": "Curve CLEV-ETH Pool",
            "symbol": "CLEVETH-f",
            "description": "This token represents a Curve v2 crypto pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains CLEV and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "39506705075577026198",
            "tvl": 8375.065664987462,
            "price": 211.9909936545154
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 3.2085367894613226
            },
            "pricePerShare": {
                "today": 4.208536789461323,
                "weekAgo": 4.208536789461323,
                "monthAgo": 4.208536789461323
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.2455655197452094,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0011,
                    "boostedAPR": 0.2717505774946771,
                    "baseAPR": 0.10870023099787085,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xEE341d18939562D6D8A34ea31Fe9BdA55bACb947",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "25399985205045583236",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0xd73B085C715ADeE2551f5bAbc28200E79f739b0A",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1675027391
                }
            },
            {
                "address": "0x7c04A7900F0c7b681665f303aE0d04D07cad384F",
                "name": "StrategyCurveBoostedFactory-CLEVETH-f",
                "details": {
                    "totalDebt": "39506705075577026198",
                    "totalLoss": "0",
                    "totalGain": "4794973731579395905",
                    "performanceFee": 0,
                    "lastReport": 1729301411,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x3a51269E0707A3416044bad5066858A12198fCf5",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "4208536789461322922",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-140/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x487AFb967Ba2827D393A93a730Ff1951A81164D8",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurveLend-crvUSD-WETH-f",
        "name": "Curve Lend crvUSD-WETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "description": "This token represents a Curve Llama Lend deposit LP. Holders earn interest from users borrowing their supplied crvUSD against the specified collateral, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Llama Lend market accepts WETH as collateral.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x8fb1c7AEDcbBc1222325C39dd5c1D2d23420CAe3",
            "name": "Curve Vault for crvUSD",
            "symbol": "cvcrvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.001005
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xe32e53aacb72ed54495682907bBE39720D59fd70",
                "name": "StrategyConvexFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207
                }
            },
            {
                "address": "0x7A858B66cf91282A25acE68CFEe43EC76ca65246",
                "name": "StrategyCurveBoostedFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x487AFb967Ba2827D393A93a730Ff1951A81164D8",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x774B4Cbc2703cE83fB3b828b7C782d1CD983b04A",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ankrETH-f",
        "name": "Curve ankrETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf",
            "name": "Curve ankrETH Pool",
            "symbol": "crvAETHc",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains ETH and ankrETH, a token that represents staked ether in Ankr Staking, an ETH 2.0 staking platform.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "13828974678322939194",
            "tvl": 38749.92242253667,
            "price": 2802.0821010886348
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.031254291214718136,
                "composite": {
                    "boost": 2.4726853297480336,
                    "poolAPY": 0.0322,
                    "boostedAPR": 0.0025269902385757063,
                    "baseAPR": 0.001021961916534364,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xaeFD9F176497c11fbf4344E03B8d5F712A1De05a",
                "name": "StrategyCurveBoostedFactory-ankrCRV",
                "details": {
                    "totalDebt": "13828974678322939194",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730401283,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x74f22d7dBCB25e16266B1f5eDb2c583653C44aF1",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719490331
                }
            },
            {
                "address": "0x59b2525205EB992C823cf64924BC8470c0aCD035",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1691016515
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x774B4Cbc2703cE83fB3b828b7C782d1CD983b04A",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/ankreth/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xFD0877d9095789cAF24c98F7CCe092fa8E120775",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvTUSD",
        "name": "TUSD yVault",
        "category": "Stablecoin",
        "version": "0.4.3",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x0000000000085d4780B73119b644AE5ecd22b376",
            "name": "TrueUSD",
            "symbol": "TUSD",
            "description": "TrueUSD (TUSD) is a U.S. dollar stablecoin pegged to USD at 1:1. TUSD is one of a number of cryptocurrency stablecoins administered by TrustToken, a platform for tokenizing real-world assets. TUSD's equivalent redeemability for USD is maintained via partnerships with banks and fiduciary entities.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "7129426542501067452703",
            "tvl": 7108.73694667473,
            "price": 0.997098
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.0552975948272385
            },
            "pricePerShare": {
                "today": 1.0552975948272385,
                "weekAgo": 1.0552975948272385,
                "monthAgo": 1.0552975948272385
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x564bf2844654f149821697cC56572eE4384c05f7",
                "name": "StrategyKashiMultiPairLender",
                "details": {
                    "totalDebt": "7129426542501067452703",
                    "totalLoss": "0",
                    "totalGain": "10021559425023430668851",
                    "performanceFee": 0,
                    "lastReport": 1647452785,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xFD0877d9095789cAF24c98F7CCe092fa8E120775",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1055297594827238398",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xfF11566C1Bfe3c625804c9cd707dD2f36797BF1D",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-cvxPRISMA-f",
        "name": "Curve cvxPRISMA Factory yVault",
        "category": "Prisma",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x3b21C2868B6028CfB38Ff86127eF22E68d16d53B",
            "name": "Curve.fi Factory Plain Pool: cvxPrisma/Prisma",
            "symbol": "cvxprismlp-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.025452878588033183
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "prisma",
                "netAPR": 0.5243268273205582,
                "composite": {
                    "boost": 1.7631984748684046,
                    "poolAPY": 0.0024,
                    "boostedAPR": 0,
                    "baseAPR": 0.31153196103757286,
                    "cvxAPR": 0,
                    "rewardsAPR": 0.5221668273205582
                }
            }
        },
        "strategies": [
            {
                "address": "0xAa9B343ACce3195fA13BD2d6299edE939349F67e",
                "name": "StrategyCurveBoostedFactory-cvxprismlp-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702217999
                }
            },
            {
                "address": "0x0110eA6a5AD0496775Fa366e85D068c5918ABfe8",
                "name": "StrategyPrismaConvexFactory-cvxprismlp-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702352687,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x5590515aED3a63339D269a7254cAE0e0A5d20296",
                "name": "StrategyPrismaConvexFactory-cvxprismlp-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702352687
                }
            },
            {
                "address": "0x35E3ba571879E278EB577Cc9Cfb4e875E1B85f05",
                "name": "StrategyCurveBoostedFactory-cvxprismlp-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494399
                }
            },
            {
                "address": "0x1F67Aa4B62d5d775B3347Dc102f8e908aB88c203",
                "name": "StrategyConvexFactory-cvxprismlp-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1702217999
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xfF11566C1Bfe3c625804c9cd707dD2f36797BF1D",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-371/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x66017371c032Cd5a67Fec6913A9e37d5bd1C690c",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-pufETH",
        "name": "yPT-pufETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xD9A442856C234a39a81a089C06451EBAa4306a72",
            "name": "pufETH",
            "symbol": "pufETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "21621244017614856",
            "tvl": 53.92446364213233,
            "price": 2494.05
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.0061112883765757076
            },
            "pricePerShare": {
                "today": 1.0061112883765757,
                "weekAgo": 1.0061112883765757,
                "monthAgo": 1.0061112883765757
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.04633001809728832,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.04633001809728832
                }
            }
        },
        "strategies": [
            {
                "address": "0xC4e1364B537dC57637E283f4A16C69ebB363570d",
                "name": "yPT-pufETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1727311895
                }
            },
            {
                "address": "0x6d029f15102725FC0E9fEB4995c7762fe2430b5D",
                "name": "yPT-pufETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "21621244017614856",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719080651,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x66017371c032Cd5a67Fec6913A9e37d5bd1C690c",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1006111288376575609",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0x2a82DcdcBfB88e92021B8BcC3DA22703a2E4459c",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-BUSD-f",
        "name": "Curve BUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
            "name": "Curve BUSD Pool",
            "symbol": "crvBUSD",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This factory metapool contains 3Crv (DAI, USDC, and USDT) and Binance USD, a regulated stablecoin issued by Paxos.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "447720534985764608084",
            "tvl": 464.47367758709913,
            "price": 1.037418749626633
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.07852142351324654
            },
            "pricePerShare": {
                "today": 1.0785214235132465,
                "weekAgo": 1.0785214235132465,
                "monthAgo": 1.0785214235132465
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x73946Af671Fd049d040918C929EC9d806BCa288d",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "4038212566097810962222",
                    "performanceFee": 0,
                    "lastReport": 1718232191
                }
            },
            {
                "address": "0x7663DE3374a2da5C0D0F9E09f577e6e3E13364c7",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1691016515
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x2a82DcdcBfB88e92021B8BcC3DA22703a2E4459c",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1078521423513246577",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/busdv2/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xd02b103f7f5dba89Ad316E2b3Fe247F280CcE5b2",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-xETH-f",
        "name": "Curve xETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x16eAd9a10b1A77007E6E329B076aD1Fe97a6F7C0",
            "name": "Curve.fi Factory Crypto Pool: xETH/ETH",
            "symbol": "xETHETH-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "79106407940504692223",
            "tvl": 10422.902831817835,
            "price": 131.75800928360718
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.08058112504500037
            },
            "pricePerShare": {
                "today": 1.0805811250450004,
                "weekAgo": 1.0805811250450004,
                "monthAgo": 1.0805811250450004
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0634902538152867,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0004,
                    "boostedAPR": 0.07014472646142966,
                    "baseAPR": 0.028057890584571865,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xDA1F2B287575375B0F9A1D1338FA1C9698257b20",
                "name": "StrategyCurveBoostedFactory-xETHETH-f",
                "details": {
                    "totalDebt": "79106407940504692223",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730172239,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x1eA323272AcF0Ee3080f9a744B06984E5354B11B",
                "name": "StrategyConvexFactory-xETHETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1696624199
                }
            },
            {
                "address": "0x46C138C1c0812dC78925CCbBB023c2045bC33733",
                "name": "StrategyCurveBoostedFactory-xETHETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "6548961183020606942",
                    "performanceFee": 0,
                    "lastReport": 1719355799
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xd02b103f7f5dba89Ad316E2b3Fe247F280CcE5b2",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1080581125045000358",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-302/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xD6A4180c819324A9E432CA07C689EcBF00088cd6",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-EURS-f",
        "name": "Curve EURS Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
            "name": "Curve EURS Pool",
            "symbol": "crvEURS",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains EURS and synthetic euro (sEUR) minted on the Synthetix platform.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "42245335646623106930",
            "tvl": 46.93608263212171,
            "price": 1.1110358555258293
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.00038752087108551153
            },
            "pricePerShare": {
                "today": 1.0003875208710855,
                "weekAgo": 1.0003875208710855,
                "monthAgo": 1.0003875208710855
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x8aaD3F849fe9E572125264267179245C52Eab55B",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "422289710389810332348",
                    "performanceFee": 0,
                    "lastReport": 1713721895
                }
            },
            {
                "address": "0xB2D91583FCa7EF0F08D1f7bA7b6EA9328b776f7C",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710701591
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xD6A4180c819324A9E432CA07C689EcBF00088cd6",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000387520871085580",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/eurs/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xe5baF8b6Be442811211e9339d9fbC1B8fb7D66dF",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysUSDT",
        "name": "Aave V3 USDT Lender",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Supplies {{token}} to [Aave V3](https://app.aave.com/) to generate interest and earn any applicable rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 6,
        "chainID": 1,
        "token": {
            "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "name": "Tether USD",
            "symbol": "USDT",
            "description": "",
            "decimals": 6
        },
        "tvl": {
            "totalAssets": "2530580204751",
            "tvl": 2530580.204751,
            "price": 1
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 0.0930273245379055,
                "monthAgo": 0,
                "inception": 0.0028589999999999454
            },
            "pricePerShare": {
                "today": 1.002859,
                "weekAgo": 1.001073,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.04341383822787681,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.04341383822787681,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xe5baF8b6Be442811211e9339d9fbC1B8fb7D66dF",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1002849",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0x8294BbA6671d4094A7C0e9c98E615FBC11f96388",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-swETH",
        "name": "yPT-swETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xf951E335afb289353dc249e82926178EaC7DEd78",
            "name": "swETH",
            "symbol": "swETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "123116192392354316",
            "tvl": 324.3178020423067,
            "price": 2634.2416520545944
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.035576528743168856,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.035576528743168856
                }
            }
        },
        "strategies": [
            {
                "address": "0x5C75263c5390798082cFc389ad38B12196C1C256",
                "name": "yPT-swETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "123116192392354316",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719080051,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x8294BbA6671d4094A7C0e9c98E615FBC11f96388",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0xa8eF50905352aCD611F53640b001E48F2eA31d63",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-cvxCRVv2-f",
        "name": "Curve cvxCRVv2 Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x971add32Ea87f10bD192671630be3BE8A11b8623",
            "name": "Curve cvxCRV-CRV Pool",
            "symbol": "cvxcrv-crv-f",
            "description": "This token represents a curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This curve pool contains CRV and cvxCRV. cvxCRV is Convex Finance's liquid staking derivative for Curve Finance's veCRV.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "6469834085428923583579",
            "tvl": 1465.6929542676023,
            "price": 0.22654258747818148
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.8170046993255302
            },
            "pricePerShare": {
                "today": 1.8170046993255302,
                "weekAgo": 1.8170046993255302,
                "monthAgo": 1.8170046993255302
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.258457518959304,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.0034999999999999996,
                    "boostedAPR": 0.2836750210658933,
                    "baseAPR": 0.11347000842635735,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xf60A966029CCf2758Ed103B0Da4B35366C29F16d",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "21971345245049070639367",
                    "performanceFee": 0,
                    "lastReport": 1719321251
                }
            },
            {
                "address": "0xdB46dCB5134A03E2dbe78329e8146a48977B262F",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1684709819
                }
            },
            {
                "address": "0x86D1177524961D9ab1Dad7c42534f1379C43Bd49",
                "name": "StrategyCurveBoostedFactory-cvxcrv-crv-f",
                "details": {
                    "totalDebt": "6469834085428923583579",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729278503,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xa8eF50905352aCD611F53640b001E48F2eA31d63",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1817004699325530132",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-283/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xbcccE9991D2C8A8056D677c0c52C20ac901f39eC",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-fxUSDGHO-f",
        "name": "Curve fxUSDGHO Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x74345504Eaea3D9408fC69Ae7EB2d14095643c5b",
            "name": "GHO/fxUSD",
            "symbol": "fxUSDGHO",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "53380243490028620771509",
            "tvl": 53613.04903120254,
            "price": 1.0043612678765208
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "convex",
                "netAPR": 0.00576,
                "composite": {
                    "boost": 1.7631299313674762,
                    "poolAPY": 0.0064,
                    "boostedAPR": 0,
                    "baseAPR": 6.792340245809214e-8,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x7D25B0e0Aceb8ca1e0B87387bd89eB5BB93F9EFf",
                "name": "StrategyCurveBoostedFactory-fxUSDGHO",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1712771771
                }
            },
            {
                "address": "0x3aCC862c2aCea6eeD17EDdf906f5Dc133C23778F",
                "name": "StrategyCurveBoostedFactory-fxUSDGHO",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495
                }
            },
            {
                "address": "0x025466B3E29a854e8946c13BCF9a5Fc9746aA976",
                "name": "StrategyConvexFxnFactory-fxUSDGHO",
                "details": {
                    "totalDebt": "53380243490028620771509",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730348699,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x81c653A27557BC673Fca34F8946Fc8433386817B",
                "name": "StrategyConvexFactory-fxUSDGHO",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1712771771
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xbcccE9991D2C8A8056D677c0c52C20ac901f39eC",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-111/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x445F62Ee351E57cACBF3161F66562Ff2B1261db4",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-TUSD-crvUSD-f",
        "name": "Curve TUSD-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x34D655069F4cAc1547E4C8cA284FfFF5ad4A8db0",
            "name": "Curve crvUSD-TUSD Pool",
            "symbol": "crvUSDTUSD-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains TUSD and crvUSD, a dollar pegged stablecoin from [Curve Finance](https://crvusd.curve.fi/#/ethereum/markets).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "326620438615503122854",
            "tvl": 326.7785144350968,
            "price": 1.0004839740595037
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.0689505045237766
            },
            "pricePerShare": {
                "today": 1.0689505045237766,
                "weekAgo": 1.0689505045237766,
                "monthAgo": 1.0689505045237766
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.23500581675188684,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0101,
                    "boostedAPR": 0.25101757416876314,
                    "baseAPR": 0.10040702966750525,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x75404F4Cc918d697AE58292CF9E947A9c3c3de18",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1690051979
                }
            },
            {
                "address": "0xE3d14f97BEab10Aa5D0b3C58231De3b2aC908A90",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "3091358543159163139303",
                    "performanceFee": 0,
                    "lastReport": 1719321419
                }
            },
            {
                "address": "0x754d46B029439AA1492b1d98891ec0B79f981A7B",
                "name": "StrategyCurveBoostedFactory-crvUSDTUSD-f",
                "details": {
                    "totalDebt": "326620438615503122854",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279187,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x445F62Ee351E57cACBF3161F66562Ff2B1261db4",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1068950504523776614",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-3/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x63bD3Bbb6c5cb6E457C3f3cbb2D8aa2536E319F1",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-GUSD-f",
        "name": "Curve GUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
            "name": "Curve GUSD Pool",
            "symbol": "crvGUSD",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This metapool contains 3Crv (DAI, USDC, and USDT) and Gemini USD, a regulated stablecoin issued by the US exchange, Gemini.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "7452675422402900186473",
            "tvl": 7885.318141683944,
            "price": 1.05805200075942
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.17741790302525207
            },
            "pricePerShare": {
                "today": 1.177417903025252,
                "weekAgo": 1.177417903025252,
                "monthAgo": 1.177417903025252
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.05018293499392209,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.012,
                    "boostedAPR": 0.043758816659913435,
                    "baseAPR": 0.017503526663965374,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xb551Ce7a7BFB6DA863Ce8756F766E9af83398a98",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1691016515
                }
            },
            {
                "address": "0xA506e77742c9d4370447C455004000cbc9AA9B4A",
                "name": "StrategyCurveBoostedFactory-gusd3CRV",
                "details": {
                    "totalDebt": "7452675422402900186473",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279283,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xAE1f339621Ecf6d2AEBeAa1dDFA6FF16841dd63b",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "3874760944340890285275",
                    "performanceFee": 0,
                    "lastReport": 1719321131
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x63bD3Bbb6c5cb6E457C3f3cbb2D8aa2536E319F1",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1177417903025251983",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/gusd/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x63c5c0604Ec410130C69C958aCab81794f7a622F",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-MATIC-ETH-f",
        "name": "Curve MATIC-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xD8eb58D76aF99547333cfEeb6a0f9bd1A63b6492",
            "name": "Curve MATIC-ETH Pool",
            "symbol": "ETH MATIC-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains MATIC, and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "3946500733536770682",
            "tvl": 219.13055543938904,
            "price": 55.525279287863924
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.029482017422279627
            },
            "pricePerShare": {
                "today": 1.0294820174222796,
                "weekAgo": 1.0294820174222796,
                "monthAgo": 1.0294820174222796
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.5381512009775814,
                "composite": {
                    "boost": 1.5615327305794895,
                    "poolAPY": 0.0016,
                    "boostedAPR": 0.5963457788639793,
                    "baseAPR": 0.3818977131799688,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x5F5AbBf8e98648e296C20aD9F747ceF87cA68772",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1676132999
                }
            },
            {
                "address": "0x652f4684102d9bbd3ffA4668b4Bb5A509ECA5425",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "38782084387848599552",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0xA456Dd3AFAB2C46E4093a0855fBB4EF85226dd86",
                "name": "StrategyCurveBoostedFactory-ETH MATIC-f",
                "details": {
                    "totalDebt": "3946500733536770682",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729296539,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x63c5c0604Ec410130C69C958aCab81794f7a622F",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1029482017422279687",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-184/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xE510E87d0eF7d987Ed1baF8E1D7Aaef5b9e3db42",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-OHM-ETH-f",
        "name": "Curve OHM-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x3660BD168494d61ffDac21E403d0F6356cF90fD7",
            "name": "Curve OHM-ETH Pool",
            "symbol": "OHMETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains OHM and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 402.3565502700205
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.01104310320606179,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0019,
                    "boostedAPR": 0.010370114673401987,
                    "baseAPR": 0.004148045869360795,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xE4c60c609588e9E1b4373DFC8c0B6368A8e759d9",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1681345475
                }
            },
            {
                "address": "0x63AbD6284Bd93CCD504E8bB332b15c99b319E242",
                "name": "StrategyCurveBoostedFactory-OHMETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xF7c1b9Cbea4Eebb7A8dddE791494092a439cb9E7",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1718336963
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xE510E87d0eF7d987Ed1baF8E1D7Aaef5b9e3db42",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-21/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x90759801579208B28D2D36D13b1ED7443D1b717F",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysWETH",
        "name": "Aave V3 WETH Lender",
        "category": "Volatile",
        "version": "3.0.3",
        "description": "Supplies {{token}} to [Aave V3](https://app.aave.com/) to generate interest and earn any applicable rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "19720908371832916",
            "tvl": 48.371049636264345,
            "price": 2452.78
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 0.03358579609732605,
                "monthAgo": 0,
                "inception": 2.293323409068296
            },
            "pricePerShare": {
                "today": 3.293323409068296,
                "weekAgo": 3.2912035081653364,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.01993016821982274,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.01993016821982274,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x90759801579208B28D2D36D13b1ED7443D1b717F",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "3293312559413032440",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0xB512D68A3194ba294A5b8146FA9beCd6a5Fea137",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-sUSD-crvUSD-f",
        "name": "Curve sUSD-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x94cC50e4521bD271C1a997a3A4Dc815C2F920b41",
            "name": "Curve crvUSD-sUSD Pool",
            "symbol": "crvUSDsUSD-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains sUSD and crvUSD, a dollar pegged stablecoin from [Curve Finance](https://crvusd.curve.fi/#/ethereum/markets).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "3160343504448917165083",
            "tvl": 3167.4643957677104,
            "price": 1.0022532016879713
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.8747522992922802
            },
            "pricePerShare": {
                "today": 1.87475229929228,
                "weekAgo": 1.87475229929228,
                "monthAgo": 1.87475229929228
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.19319795214512445,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.0023,
                    "boostedAPR": 0.21236439127236048,
                    "baseAPR": 0.0849457565089442,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x8a6bD845E58eDaaA7C2285701013D1B0004D98FD",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "17330809892743490832005",
                    "performanceFee": 0,
                    "lastReport": 1719492875
                }
            },
            {
                "address": "0xc1d8CD84229722FF14085798cc96df12202aC272",
                "name": "StrategyCurveBoostedFactory-crvUSDSUSD-f",
                "details": {
                    "totalDebt": "3160343504448917165083",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729273571,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x793f1487be72e7D6dC8d8D2f44b83d7F2352a87e",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1690052015
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xB512D68A3194ba294A5b8146FA9beCd6a5Fea137",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1874752299292279981",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-7/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xF29AE508698bDeF169B89834F76704C3B205aedf",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvSNX",
        "name": "SNX yVault",
        "category": "Volatile",
        "version": "0.3.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
            "name": "Synthetix Network Token",
            "symbol": "SNX",
            "description": "Synthetix is a decentralized finance (DeFi) protocol that provides on-chain exposure to a wide variety of crypto and non-crypto assets. The protocol is based on the Ethereum (ETH) blockchain and offers users access to highly liquid synthetic assets (synths). Synths track and provide returns on the underlying asset without requiring one to directly hold the asset. SNX tokens are used for protocol governance and can also be used as collateral to mint synths.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "117579591864621290530962",
            "tvl": 154029.26534265387,
            "price": 1.31
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.14653634080992672
            },
            "pricePerShare": {
                "today": 1.1465363408099267,
                "weekAgo": 1.1465363408099267,
                "monthAgo": 1.1465363408099267
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x75c445F9c13B677b4E5488E37A8Eb3C70875441e",
                "name": "Tokemak Reinvest",
                "description": "Supplies {{token}} to [Tokemak](https://www.tokemak.xyz) to earn TOKE. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "2814874777594142899312",
                    "performanceFee": 0,
                    "lastReport": 1659030397
                }
            },
            {
                "address": "0xc9a62e09834cEdCFF8c136f33d0Ae3406aea66bD",
                "name": "Synthetix Minter Reinvest",
                "description": "Stakes {{token}} on [Synthetix](https://staking.synthetix.io/) and mints sUSD. The newly minted sUSD is then deposited into the sUSD yVault to generate yield. Generated yield, weekly {{token}} fees and vested rewards (when claimable) are harvested, sold for more {{token}} which is deposited back into the strategy. **Rewards on staked {{token}} are locked for 1 year**.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "159721630415418845611820",
                    "performanceFee": 0,
                    "lastReport": 1679079923
                }
            },
            {
                "address": "0xFB5F4E0656ebfF31743e674d324554fd185e1c4b",
                "name": "StrategySynthetixSusdMinter",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "12305403241504989356524",
                    "performanceFee": 0,
                    "lastReport": 1654710017
                }
            },
            {
                "address": "0xcB787FC49d54047688e58D283BE9b809b41395A9",
                "name": "League Dao Reinvest",
                "description": "Supplies {{token}} to [League Dao](https://dao.leaguedao.com/yield-farming) to earn LEAG. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "15095117584131988511909",
                    "performanceFee": 0,
                    "lastReport": 1646365185
                }
            },
            {
                "address": "0x860Ea5e0f8777CFA781873Ffb7fB3E8Ac6F5e63A",
                "name": "88 MPH Reinvest",
                "description": "Supplies {{token}} to [88 MPH](https://88mph.app/earn) to earn a fixed-rate yield and MPH tokens. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1494996934263923770154",
                    "performanceFee": 0,
                    "lastReport": 1663106446
                }
            },
            {
                "address": "0xAA28e87062Ff4023Acd39c4c6a9693Ea889E9d28",
                "name": "Aave Lender Optimizer",
                "description": "Supplies {{token}} to [AAVE](https://app.aave.com/home) to generate interest and earn stkAAVE tokens. Once unlocked, earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "117579591864621290530962",
                    "totalLoss": "0",
                    "totalGain": "37916195839928842774727",
                    "performanceFee": 0,
                    "lastReport": 1729446647,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xF29AE508698bDeF169B89834F76704C3B205aedf",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1146536340809926676",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xBfBC4acAE2ceC91A5bC80eCA1C9290F92959f7c3",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-eUSDUSDC-f",
        "name": "Curve eUSDUSDC Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x08BfA22bB3e024CDfEB3eca53c0cb93bF59c4147",
            "name": "eUSD/USDC",
            "symbol": "eUSDUSDC",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.004580655219536
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.17360445698117827,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0045000000000000005,
                    "boostedAPR": 0.18839384109019808,
                    "baseAPR": 0.07535753643607923,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xB3650Ee177E186732c0a3B54bCaec201C76b2Df2",
                "name": "StrategyCurveBoostedFactory-eUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1723203755,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x2663Bd22c2BA9E03b3aE1Aa1C0c765781D2Da154",
                "name": "StrategyConvexFactory-eUSDUSDC",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1726124603
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xBfBC4acAE2ceC91A5bC80eCA1C9290F92959f7c3",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-167/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x0DAa35A1735152EDb928239c1712883Dd8Eb976f",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yLQTY",
        "name": "Yearn LQTY",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
            "name": "Liquity",
            "symbol": "LQTY",
            "description": "Liquity is a decentralized borrowing protocol that allows you to draw interest-free loans against Ether used as collateral. LQTY is the secondary token issued by the Liquity protocol. It captures the fee revenue that is generated by the system and incentivizes early adopters and Frontend Operators.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "31748406226862012043800",
            "tvl": 26668.915217813905,
            "price": 0.840008
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.05,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.0501251101363247
            },
            "pricePerShare": {
                "today": 1.0501251101363247,
                "weekAgo": 1.0501251101363247,
                "monthAgo": 1.0501251101363247
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x478085739EA884F38Add4D36872aCd8333b5D4D6",
                "name": "StrategyLQTYStaker",
                "details": {
                    "totalDebt": "31748406226862012043800",
                    "totalLoss": "0",
                    "totalGain": "12183733520288536971610",
                    "performanceFee": 0,
                    "lastReport": 1729978859,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x0DAa35A1735152EDb928239c1712883Dd8Eb976f",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1050125110136324639",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xBB1Cc2ca1d89Fb593e2F79FC7474fdF40d78f6Be",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USD3eUSD-f",
        "name": "Curve USD3eUSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x79586fa680958102154093B795Fdb8EFBc013822",
            "name": "USD3/eUSD",
            "symbol": "USD3eUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.004677321997045
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.00558,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0062,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x517C12b01de47a0A71b9C5Fd055f75a2d99ceb87",
                "name": "StrategyCurveBoostedFactory-USD3eUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1725500903,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x2CD5c2B701b5b582571D8593CabCCF38d05e72db",
                "name": "StrategyConvexFactory-USD3eUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719934823
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xBB1Cc2ca1d89Fb593e2F79FC7474fdF40d78f6Be",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-170/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x2407b40c08e528A627Ebd99CCcea89d888d00906",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurveLend-crvUSD-tBTC-f",
        "name": "Curve Lend crvUSD-tBTC Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "description": "This token represents a Curve Llama Lend deposit LP. Holders earn interest from users borrowing their supplied crvUSD against the specified collateral, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Llama Lend market accepts [Threshold Network's](https://threshold.network/) tBTC as collateral.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xb2b23C87a4B6d1b03Ba603F7C3EB9A81fDC0AAC9",
            "name": "Curve Vault for crvUSD",
            "symbol": "cvcrvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.001031
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xEf23fEFA145782995b5F5576CC7e3f3b39D9453e",
                "name": "StrategyCurveBoostedFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x6deF2A667f084fe8911A922314fed946C4cE4556",
                "name": "StrategyConvexFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x2407b40c08e528A627Ebd99CCcea89d888d00906",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xcd68c3fC3e94C5AcC10366556b836855D96bfa93",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-dETH-f",
        "name": "Curve dETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x7C0d189E1FecB124487226dCbA3748bD758F98E4",
            "name": "Curve dETHfrxETH Pool",
            "symbol": "dETHfrxETH-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains frxETH and dETH, an Ethereum liquid staking derivative from [Steakhouse](https://lsd.joinstakehouse.com).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "11988270045024168287",
            "tvl": 12253.364454688099,
            "price": 1022.112816
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.11204303238356748
            },
            "pricePerShare": {
                "today": 1.1120430323835675,
                "weekAgo": 1.1120430323835675,
                "monthAgo": 1.1120430323835675
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.05220157109287112,
                "composite": {
                    "boost": 1.1905990409427862,
                    "poolAPY": 0,
                    "boostedAPR": 0.05800174565874569,
                    "baseAPR": 0.04871643909003698,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xAaC7fe6801AcF1a1B24e1cb32Ac395BB45fb4c71",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1708480451
                }
            },
            {
                "address": "0xcb85A7dd08f83d17EFcEd1c1C8C49005cB5b3a6F",
                "name": "StrategyCurveBoostedFactory-dETHfrxETH-f",
                "details": {
                    "totalDebt": "11988270045024168287",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729472303,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xA7fe81248B259106d4714616aEB721010F5b85A4",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "6508390341489429310",
                    "performanceFee": 0,
                    "lastReport": 1719321575
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xcd68c3fC3e94C5AcC10366556b836855D96bfa93",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1112043032383567466",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-287/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x019015647be0b2604506F4EB8290908F062B62cb",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-rev fxUSD-f",
        "name": "Curve rev fxUSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6fC7eA6CA8Cd2759803eb78159C931a8FF5E0557",
            "name": "rev fxUSD",
            "symbol": "rev fxUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.998158
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.006034166755241377,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0.006704629728045974,
                    "baseAPR": 0.0026818518912183897,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x3F89bEEc97A0eB44C1A8b9510fFcef2c7f2fe384",
                "name": "StrategyCurveBoostedFactory-rev fxUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x2949E16887564956a2044889c0813529660F6700",
                "name": "StrategyConvexFactory-rev fxUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1716917843
                }
            },
            {
                "address": "0x80A4DA173faAD809260634e8382BF18e600A7B8b",
                "name": "StrategyCurveBoostedFactory-rev fxUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1716917843
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x019015647be0b2604506F4EB8290908F062B62cb",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-127/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x8c99c1FF4978790ea496c71bc6e769F1D8691e1C",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-zunETH-frxETH-f",
        "name": "Curve zunETH-frxETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x3A65cbaebBFecbeA5D0CB523ab56fDbda7fF9aAA",
            "name": "zunETH/frxETH",
            "symbol": "ZUNFRXETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2393.638839627139
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.07608921531180501,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0066,
                    "boostedAPR": 0.07794357256867224,
                    "baseAPR": 0.031177429027468895,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xabD2C922B6C7d88AfC50566768ec8D8D30C80260",
                "name": "StrategyCurveBoostedFactory-ZUNFRXETH",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xb51932dC4104124eaBe2598b10C0ff43cde2D63e",
                "name": "StrategyCurveBoostedFactory-ZUNFRXETH",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1717279655
                }
            },
            {
                "address": "0x55a30142554f8692f519DEf26324f2d48AC3f990",
                "name": "StrategyConvexFactory-ZUNFRXETH",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1714115447
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x8c99c1FF4978790ea496c71bc6e769F1D8691e1C",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-121/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xFBEB78a723b8087fD2ea7Ef1afEc93d35E8Bed42",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvUNI",
        "name": "UNI yVault",
        "category": "Volatile",
        "version": "0.3.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            "name": "Uniswap",
            "symbol": "UNI",
            "description": "UNI is the governance token for Uniswap, an Automated Market Market DEX on the Ethereum blockchain. The UNI token allows token holders to participate in the governance of the protocol. Key decisions such as usage of the treasury or future upgrades can be decided through a governance vote.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "19462977223620803232894",
            "tvl": 139160.28714888875,
            "price": 7.15
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.017746042147565477
            },
            "pricePerShare": {
                "today": 1.0177460421475655,
                "weekAgo": 1.0177460421475655,
                "monthAgo": 1.0177460421475655
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x9Ae0B9a67cF5D603847980D95Ad4D45b57Ff7783",
                "name": "Maker Delegate",
                "description": "Stakes {{token}} in [MakerDAO](https://oasis.app/borrow) vault and mints DAI. This newly minted DAI is then deposited into the DAI yVault to generate yield.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "152908764292427322719",
                    "performanceFee": 0,
                    "lastReport": 1628652367
                }
            },
            {
                "address": "0x6EB00860260CF51623737e17579Db797d71cd337",
                "name": "PoolTogether Uniswap",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "123526636229269325901",
                    "performanceFee": 0,
                    "lastReport": 1626919591
                }
            },
            {
                "address": "0x5e882c9f00209315e049B885B9b3dfbEe60D80A4",
                "name": "StrategyLenderYieldOptimiser",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "533758680233418374",
                    "performanceFee": 0,
                    "lastReport": 1621639219
                }
            },
            {
                "address": "0xaD389B9Caa1820eDE6703C499C59BC0a503F754E",
                "name": "88 MPH Reinvest",
                "description": "Supplies {{token}} to [88 MPH](https://88mph.app/earn) to earn a fixed-rate yield and MPH tokens. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "19462977223620803232894",
                    "totalLoss": "0",
                    "totalGain": "1392606674067121818177",
                    "performanceFee": 0,
                    "lastReport": 1686116495
                }
            },
            {
                "address": "0x60A3D5bEeEED797ccFf709ee78A42E2cF67235B7",
                "name": "Vesper Finance Reinvest",
                "description": "Supplies {{token}} to [Vesper Finance](https://vesper.finance) to earn VSP. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "262924145617105074736",
                    "totalGain": "1883904863915131095181",
                    "performanceFee": 0,
                    "lastReport": 1646677673
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xFBEB78a723b8087fD2ea7Ef1afEc93d35E8Bed42",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1017746042147565603",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xc869206adAfD3D874dB22e8BbA662E05F6257613",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-clevCVX-f",
        "name": "Curve clevCVX Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xF9078Fb962A7D13F55d40d49C8AA6472aBD1A5a6",
            "name": "Curve clevCVX Pool",
            "symbol": "clevCVX-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory liquidity pool contains clevCVX and CVX. clevCVX is from CLever a protocol created by [Aladdin.Club](https://clever.aladdin.club/#/clever/cleverCVX) which allows one to lock their CVX and claim their current and future yield.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "70316665797042433592",
            "tvl": 90.97499904155553,
            "price": 1.29379
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.1311438698465519
            },
            "pricePerShare": {
                "today": 1.131143869846552,
                "weekAgo": 1.131143869846552,
                "monthAgo": 1.131143869846552
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.23540648418328225,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0005,
                    "boostedAPR": 0.26106276020364694,
                    "baseAPR": 0.10442510408145877,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x17403FC4E747CBDab74A489F1343d70D484AE8C7",
                "name": "StrategyCurveBoostedFactory-clevCVX-f",
                "details": {
                    "totalDebt": "70316665797042433592",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729301051,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xB69Db6620313fAcdf17227f366010678f8f2487c",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "645427443147158515387",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0x4F263aBA09C01410966044B673351f475CE34696",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1679545115
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xc869206adAfD3D874dB22e8BbA662E05F6257613",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1131143869846551796",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-209/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvWBTC",
        "name": "WBTC yVault",
        "category": "Volatile",
        "version": "0.3.5",
        "decimals": 8,
        "chainID": 1,
        "token": {
            "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            "name": "Wrapped BTC",
            "symbol": "WBTC",
            "description": "",
            "decimals": 8
        },
        "tvl": {
            "totalAssets": "5231081294",
            "tvl": 3576856.45639838,
            "price": 68377
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.023924520000000005
            },
            "pricePerShare": {
                "today": 1.02392452,
                "weekAgo": 1.02392452,
                "monthAgo": 1.02392452
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0x1E93cD1e6766e7FCB459092e160F876ddA650415",
                "name": "Aave Optimizer",
                "description": "Supplies {{token}} to [AAVE](https://app.aave.com) v3 to generate interest and earn rewards. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "534163374",
                    "totalLoss": "0",
                    "totalGain": "1893252",
                    "performanceFee": 0,
                    "lastReport": 1720642583,
                    "debtRatio": 1000
                }
            },
            {
                "address": "0x9E9a2a86eeff52FFD13fc724801a4259b2B1A949",
                "name": "Compound Lender Borrower",
                "description": "Supplies {{token}} on [Compound Finance](https://app.compound.finance/?market=usdc-mainnet) version 3 and borrows USDC which it also deposits to earn COMP. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "25100345",
                    "performanceFee": 0,
                    "lastReport": 1704350567
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "102392452",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xe2277cC76f806925DC6c9a5E4E5933605f43c3c4",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-LUSD-crvUSD-f",
        "name": "Curve LUSD-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x9978c6B08d28d3B74437c917c5dD7C026df9d55C",
            "name": "Curve.fi Factory Plain Pool: LUSD/crvUSD",
            "symbol": "LUSDcrvUSD-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "970914075239966872112",
            "tvl": 976.8662402878416,
            "price": 1.0061304755999172
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.5578678233360292
            },
            "pricePerShare": {
                "today": 1.5578678233360292,
                "weekAgo": 1.5578678233360292,
                "monthAgo": 1.5578678233360292
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.04414173548528739,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0011,
                    "boostedAPR": 0.047946372761430434,
                    "baseAPR": 0.019178549104572173,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xf4E8eeB82c74daEa13702C74760b36d4F09b6Ed1",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1695109907
                }
            },
            {
                "address": "0x426De3b5193045B40d594731E3ed763882CfaC2D",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "6109467471362932946199",
                    "performanceFee": 0,
                    "lastReport": 1719321491
                }
            },
            {
                "address": "0xdc56d1730e8f0f501D8b6391999acC1B7A1B4AA0",
                "name": "StrategyCurveBoostedFactory-LUSDcrvUSD-f",
                "details": {
                    "totalDebt": "970914075239966872112",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279991,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xe2277cC76f806925DC6c9a5E4E5933605f43c3c4",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1557867823336029112",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-345/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x8176b059BD8f63aeB7e20282b12D243b4626E2AE",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-FRAX-crvUSD-f",
        "name": "Curve FRAX-crvUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x0CD6f267b2086bea681E922E19D40512511BE538",
            "name": "Curve crvUSD-FRAX Pool",
            "symbol": "crvUSDFRAX-f",
            "description": "This token represents a Curve factory liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains FRAX and crvUSD, a dollar pegged stablecoin from [Curve Finance](https://crvusd.curve.fi/#/ethereum/markets).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "2904779849159288925287",
            "tvl": 2909.064128729404,
            "price": 1.0014749068062265
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.11043478288664454
            },
            "pricePerShare": {
                "today": 1.1104347828866445,
                "weekAgo": 1.1104347828866445,
                "monthAgo": 1.1104347828866445
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.09269400432024988,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0008,
                    "boostedAPR": 0.10219333813361098,
                    "baseAPR": 0.04087733525344439,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xD7c355c78ba2716b5d52065C3e0735BADf046B8c",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1687038971
                }
            },
            {
                "address": "0x78B964Dbb57ef4dBBBB0c33B83233F9091c92641",
                "name": "StrategyCurveBoostedFactory-crvUSDFRAX-f",
                "details": {
                    "totalDebt": "2904779849159288925287",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279211,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x1492011cf0523F61d02AC541C3d1958756C8A383",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "26585893345600759612202",
                    "performanceFee": 0,
                    "lastReport": 1719321467
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x8176b059BD8f63aeB7e20282b12D243b4626E2AE",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1110434782886644614",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crvusd-4/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xC8cA30Aa2E486846f7304D3B9334f96d32000F8d",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-apeUSD-FBP-f",
        "name": "Curve apeUSD-FRAXBP Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x04b727C7e246CA70d496ecF52E6b6280f3c8077D",
            "name": "Curve apeUSD-FRAXBP Pool",
            "symbol": "apeUSDFRAXBP-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Curve factory liqudity pool contains ApeUSD, FRAX, and USDC.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1162125932743430151910",
            "tvl": 1168.1503935787723,
            "price": 1.005184
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 4.8140993533756795
            },
            "pricePerShare": {
                "today": 5.8140993533756795,
                "weekAgo": 5.8140993533756795,
                "monthAgo": 5.8140993533756795
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0xA9dc2cb7a3ea474fA824f5baFE694001D70a0246",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1673316635
                }
            },
            {
                "address": "0x5752d0e9c95f9fe34C19174F1BEAb8fa9c9F9737",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1858632220281767985152",
                    "performanceFee": 0,
                    "lastReport": 1718232179
                }
            },
            {
                "address": "0x1507079C55C294c80BFaf69c1121C24324e5Ad65",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1673316635
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xC8cA30Aa2E486846f7304D3B9334f96d32000F8d",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "5814099353375679023",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-138/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x00CB87656196dD835b9E4d67018aE0477a1De8C1",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-uniETH",
        "name": "yPT-uniETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xF1376bceF0f78459C0Ed0ba5ddce976F1ddF51F4",
            "name": "Universal ETH",
            "symbol": "uniETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "93502007822593",
            "tvl": 0.24625530298228496,
            "price": 2633.69
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xB4A0E65F8D23CFB92bA94CDD726C707b864796d0",
                "name": "yPT-uniETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719080015
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x00CB87656196dD835b9E4d67018aE0477a1De8C1",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0x4c2dF8adB2B14e1d5FDBD9d11A2cf7562b67adC9",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-mevETHfrxE-f",
        "name": "Curve mevETHfrxE-f Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x9b77bd0a665F05995b68e36fC1053AFFfAf0d4B5",
            "name": "Curve.fi Factory Crypto Pool: mevETH/frxETH",
            "symbol": "mevETHfrxE-f",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "265451271550654976",
            "tvl": 1317.7497828849346,
            "price": 4964.187118740073
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 2.001605308982676
            },
            "pricePerShare": {
                "today": 3.001605308982676,
                "weekAgo": 3.001605308982676,
                "monthAgo": 3.001605308982676
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.00018,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0002,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x631732ed9dE2367cdf8B19FeFa4385AACE6A369C",
                "name": "StrategyCurveBoostedFactory-mevETHfrxE-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "626486805657732753",
                    "performanceFee": 0,
                    "lastReport": 1719321119
                }
            },
            {
                "address": "0xe02e2ec14246fdb88DA96d483CA3a5494D204585",
                "name": "StrategyCurveBoostedFactory-mevETHfrxE-f",
                "details": {
                    "totalDebt": "265451271550654976",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279547,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xC390155ED6a09e4e8f02b412e24E7E5D3f7276dd",
                "name": "StrategyConvexFactory-mevETHfrxE-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "113360544834771103",
                    "performanceFee": 0,
                    "lastReport": 1719401867
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x4c2dF8adB2B14e1d5FDBD9d11A2cf7562b67adC9",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "3001605308982676080",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-318/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x6acEDA98725505737c0F00a3dA0d047304052948",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysDAI",
        "name": "DAI to yvUSDS Depositor",
        "category": "Stablecoin",
        "version": "3.0.3",
        "description": "Invests the DAI through Sky into USDS and farms yearn's USDS vault for yield.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "name": "Dai Stablecoin",
            "symbol": "DAI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "4710988553267751774699345",
            "tvl": 4715699.541821019,
            "price": 1.001
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0.041827803797899535,
                "monthAgo": 0,
                "inception": 0.000831537338686017
            },
            "pricePerShare": {
                "today": 1.000831537338686,
                "weekAgo": 1.0000293367462834,
                "monthAgo": 0
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.06072401815256989,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0.06072401815256989,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x6acEDA98725505737c0F00a3dA0d047304052948",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000821117784075017",
        "info": {
            "riskLevel": 1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                3,
                2,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }
    },
    {
        "address": "0xbB12C45849831201617ca6bFc0ef6EA5990580Ff",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurveLend-crvUSD-WBTC-f",
        "name": "Curve Lend crvUSD-WBTC Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "description": "This token represents a Curve Llama Lend deposit LP. Holders earn interest from users borrowing their supplied crvUSD against the specified collateral, and can also deposit the LP to Curve's gauges to earn CRV emissions. This Llama Lend market accepts WBTC as collateral.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xccd37EB6374Ae5b1f0b85ac97eFf14770e0D0063",
            "name": "Curve Vault for crvUSD",
            "symbol": "cvcrvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.00102
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x01742822E8ec3c69536C1a12C9a907757906766e",
                "name": "StrategyConvexFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207
                }
            },
            {
                "address": "0x337CEEaa0A6E6a56FaDBC4a289826c924a37D633",
                "name": "StrategyCurveBoostedFactory-cvcrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1720661207,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xbB12C45849831201617ca6bFc0ef6EA5990580Ff",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xC40dC53931cd184F782f3602d95C7e3609706004",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "yspxETH",
        "name": "Sturdy pxETH Compounder",
        "category": "Volatile",
        "version": "3.0.2",
        "description": "Supplies {{token}} to the corresponding [Sturdy](https://v2.sturdy.finance/aggregators) aggregator earning the underlying yield and compounding the rewards",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x04C154b66CB340F3Ae24111CC767e0184Ed00Cc6",
            "name": "Pirex Ether",
            "symbol": "pxETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "68624352036390821816",
            "tvl": 168153.68101237025,
            "price": 2450.35
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xC40dC53931cd184F782f3602d95C7e3609706004",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                1,
                1,
                1,
                1,
                1,
                1,
                5,
                2,
                3,
                5,
                1
            ]
        }
    },
    {
        "address": "0xebF3581407ae0Ceb07B8149b4C3AC995a72cb589",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-wstETH",
        "name": "yPT-wstETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
            "name": "Wrapped liquid staked Ether 2.0",
            "symbol": "wstETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "441820234918883999",
            "tvl": 1280.708733161718,
            "price": 2898.71
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.0016021049798460307,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.0016021049798460307
                }
            }
        },
        "strategies": [
            {
                "address": "0xF1f9cb62C0159f33e2fD96F37E71BE622a5E6393",
                "name": "yPT-wstETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719178799
                }
            },
            {
                "address": "0x7c46973c612AAE4Bf045C1F5e5f93A72df5bd96C",
                "name": "yPT-wstETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "20000000000000000",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719178787,
                    "debtRatio": 453
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xebF3581407ae0Ceb07B8149b4C3AC995a72cb589",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0x8072B1d66389a1AA039e21Aac35A92464005baF5",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-rETH-frxETH-f",
        "name": "Curve rETH-frxETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xbA6c373992AD8ec1f7520E5878E5540Eb36DeBf1",
            "name": "Curve rETH-frxETH Pool",
            "symbol": "rETHfrxETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains rETH and frxETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss. rETH is [Rocket Pool](https://rocketpool.net/)'s liquid staking derivative for staked Ethereum. frxETH is a loosely pegged stablecoin to ETH by [Frax Finance](https://app.frax.finance/frxeth/mint).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "250053427036608626",
            "tvl": 1287.0454482611046,
            "price": 5147.0818197291765
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 8.910627351627838
            },
            "pricePerShare": {
                "today": 9.910627351627838,
                "weekAgo": 9.910627351627838,
                "monthAgo": 9.910627351627838
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.07857543547840135,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0113,
                    "boostedAPR": 0.07600603942044593,
                    "baseAPR": 0.03040241576817837,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xBC8cf3577A5c82D0A5EF79d0f3040997eE56bf52",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1685706299
                }
            },
            {
                "address": "0xE7D0d1938711a69fC5a45c9E0900111E3Fd0125e",
                "name": "StrategyCurveBoostedFactory-rETHfrxETH-f",
                "details": {
                    "totalDebt": "250053427036608626",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729279439,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x5Cf3ec1727b4d871484Aa0Ac6daf3a27A02C843a",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "252308373793851653",
                    "performanceFee": 0,
                    "lastReport": 1719321311
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x8072B1d66389a1AA039e21Aac35A92464005baF5",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "9910627351627836720",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-218/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x864f78037639225b7CD0B6c632F8F187520b480B",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USDe-crvUSD-f",
        "name": "Curve USDe-crvUSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xF55B0f6F2Da5ffDDb104b58a60F2862745960442",
            "name": "USDe-crvUSD",
            "symbol": "USDecrvUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.0021950847630177
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.00234,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0026,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xc498bdd3ed2406ebbC900569282B745779178600",
                "name": "StrategyCurveBoostedFactory-USDecrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x8497e2EF950b566f0775B7A74da95A9206d6d5A3",
                "name": "StrategyCurveBoostedFactory-USDecrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1712436371
                }
            },
            {
                "address": "0x54DA10F2E39ea9B044b54fEb9837f2bc40055653",
                "name": "StrategyConvexFactory-USDecrvUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1710610103
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x864f78037639225b7CD0B6c632F8F187520b480B",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-11/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x9784Ded306E42C0b8130f668e9B7533Faa72e65D",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysWETH",
        "name": "Sturdy Sommelier Compounder",
        "category": "Volatile",
        "version": "3.0.2",
        "description": "Supplies {{token}} to the corresponding [Sturdy](https://v2.sturdy.finance/aggregators) aggregator earning the underlying yield and compounding the rewards",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "name": "Wrapped Ether",
            "symbol": "WETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2452.78
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x9784Ded306E42C0b8130f668e9B7533Faa72e65D",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                1,
                1,
                1,
                1,
                1,
                1,
                5,
                2,
                3,
                5,
                1
            ]
        }
    },
    {
        "address": "0xf1ce36c9C0dB95A052Eb4b075BC334e1f5a21Ef0",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-rswETH",
        "name": "yPT-rswETH Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
            "name": "rswETH",
            "symbol": "rswETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "220067642061223408",
            "tvl": 550.2109180050502,
            "price": 2500.19
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.005963960601044649
            },
            "pricePerShare": {
                "today": 1.0059639606010446,
                "weekAgo": 1.0059639606010446,
                "monthAgo": 1.0059639606010446
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.045397650398240064,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.045397650398240064
                }
            }
        },
        "strategies": [
            {
                "address": "0xA6826De7Cf6354804b1C7cf481bCDd09598C452B",
                "name": "yPT-rswETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "220067642061223408",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1727185475,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x791B7Ee09b55DFC3C9D4724c006EB7f914092092",
                "name": "yPT-rswETH (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1727311487
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xf1ce36c9C0dB95A052Eb4b075BC334e1f5a21Ef0",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1005963960601044634",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0x8A878E3149051B810F078FD3F2E0924290be34A6",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-USDe",
        "name": "yPT-USDe Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
            "name": "USDe",
            "symbol": "USDe",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "26984610689517364388",
            "tvl": 27.011595300206878,
            "price": 1.001
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.0040490944874342905
            },
            "pricePerShare": {
                "today": 1.0040490944874343,
                "weekAgo": 1.0040490944874343,
                "monthAgo": 1.0040490944874343
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x9C0A49b11389FA5AdC6304dc694AB115B33F7bA7",
                "name": "yPT-USDe (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "26984610689517364387",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1725433043,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xdaC04Bf6a23F8389E92C8a348B67699437af8a89",
                "name": "yPT-USDe (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1719080567
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x8A878E3149051B810F078FD3F2E0924290be34A6",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1004049094487434405",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses."
        }
    },
    {
        "address": "0x5b2384D566D2E4a0b29B8eccB642C63199cd393c",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-sUSD-f",
        "name": "Curve sUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.5",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xC25a3A3b969415c80451098fa907EC722572917F",
            "name": "Curve sUSD Pool",
            "symbol": "crvSUSD",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This pool contains DAI, USDC, USDT, and synthetic USD (sUSD) minted on the Synthetix platform.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "49267733567785760735171",
            "tvl": 52846.66396182416,
            "price": 1.0726424808868926
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.05997461639783341
            },
            "pricePerShare": {
                "today": 1.0599746163978334,
                "weekAgo": 1.0599746163978334,
                "monthAgo": 1.0599746163978334
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.004375142733377567,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.004699999999999999,
                    "boostedAPR": 0.0001612697037528532,
                    "baseAPR": 0.00006450788150114128,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x7229aaDD057F711a780b569D82A9601d6c173343",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1672372199
                }
            },
            {
                "address": "0x83D0458e627cFD7C6d0da12a1223bd168e1c8B64",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "5636127718838681548320",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0x7C5473fb357d9511d4B580b85191681773a4Eb3d",
                "name": "StrategyCurveBoostedFactory-crvPlain3andSUSD",
                "details": {
                    "totalDebt": "49267733567785760735171",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730188055,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x5b2384D566D2E4a0b29B8eccB642C63199cd393c",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1059974616397833521",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/susd/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xE6570a24Ce63dD588195B98aAD9F91B121d5F3D7",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-FXS-ETH-f",
        "name": "Curve FXS-ETH Factory yVault",
        "category": "Volatile",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x90244F43D548a4f8dFecfAD91a193465B1fad6F7",
            "name": "Curve FXS-ETH Pool",
            "symbol": "FXSETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV. This factory crypto pool contains FXS and ETH. Please be aware that as crypto pools are composed of differently-priced assets, they are subject to impermanent loss.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 136.74077196059423
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.00387,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0043,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xbc327e59F33801dB1d7Ba50D38B2B06B5e901EFE",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1677485435
                }
            },
            {
                "address": "0xF2792F5A34322e997Af325a55A8BdDbbBF85641F",
                "name": "StrategyCurveBoostedFactory-FXSETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x31493C63D1cB8B661f2313162729D49C06CB54D1",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719062531
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xE6570a24Ce63dD588195B98aAD9F91B121d5F3D7",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-crypto-3/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x379984a6Afb7CBE73EFae3B414D8E3474eDfF7B2",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-rev DOLA-f",
        "name": "Curve rev DOLA Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x20BB4a325924917E3336753BA5350a84F70f392e",
            "name": "rev DOLA",
            "symbol": "rev DOLA",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.994607
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x5205f431BCafc207DFF7a8db394652027788da15",
                "name": "StrategyConvexFactory-rev DOLA",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1716917687
                }
            },
            {
                "address": "0x7eA8e18558aFE3257b558F139523eB871f0d6469",
                "name": "StrategyCurveBoostedFactory-rev DOLA",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x5811fb20DC72E316161D7354F4965cf4c376109c",
                "name": "StrategyCurveBoostedFactory-rev DOLA",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1716917687
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x379984a6Afb7CBE73EFae3B414D8E3474eDfF7B2",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-stable-ng-126/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xbf91b696a35b539b1142e2f921A2A88BB019506a",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ETHx-WETH-f",
        "name": "Curve ETHx-WETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xd82C2eB10F4895CABED6EDa6eeee234bd1A9838B",
            "name": "Curve.fi Factory Plain Pool: ETHx/WETH",
            "symbol": "ETHxWETH-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains ETHx, and WETH.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2472.8098314765416
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.00324,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.0036,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xF22C55E4110D85943272FCD038add5BbdeDfE2E3",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1695414047
                }
            },
            {
                "address": "0xd894940D837a84fbAf551692CB25F8B429Dd4990",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1691386967
                }
            },
            {
                "address": "0x27A9BC5427A085dAfeeD482f5A80A5b4BD6b4C66",
                "name": "StrategyCurveBoostedFactory-ETHxWETH-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494399,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xbf91b696a35b539b1142e2f921A2A88BB019506a",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-319/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x0c7e3925E0986826B066CE77138b934F349a871B",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-CVGETH-f",
        "name": "Curve CVGETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x004C167d27ADa24305b76D80762997Fa6EB8d9B2",
            "name": "CVG/ETH",
            "symbol": "CVGETH",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 3.5410283736176704
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0009000000000000001,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.001,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x5c5E006cE32DA2708090D20C29eFa47D8afCFD94",
                "name": "StrategyConvexFactory-CVGETH",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1722802403
                }
            },
            {
                "address": "0x3B60BE96af9a54f2862d7e16F9BE8E7CD82176A9",
                "name": "StrategyCurveBoostedFactory-CVGETH",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1722802403,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x0c7e3925E0986826B066CE77138b934F349a871B",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/optimism/pools/factory-twocrypto-0/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x01B01C4A1F4C522aD341A9da5eaA48aF207ab3Ec",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-pUSD-FRAXBP-f",
        "name": "Curve pUSD-FRAXBP Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xE60986759872393a8360A4a7abEAb3A6e0BA7848",
            "name": "Curve.fi Factory USD Metapool: pUSDFRAXBP-A100",
            "symbol": "pUSDFRAXBP3CRV-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This crypto pool contains pUSD, Frax, and USDC.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "1105460110160593444366",
            "tvl": 1110.6248197952636,
            "price": 1.004672
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 1.2399585957886368
            },
            "pricePerShare": {
                "today": 2.2399585957886368,
                "weekAgo": 2.2399585957886368,
                "monthAgo": 2.2399585957886368
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.12270170073489114,
                "composite": {
                    "boost": 1.2308053602506912,
                    "poolAPY": 0.0025,
                    "boostedAPR": 0.13383522303876794,
                    "baseAPR": 0.10873792669501237,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xfE2fB92e9b1D913230Dc262Cac8865e92505d79d",
                "name": "StrategyCurveBoostedFactory-pUSDFRAXBP3CRV-f",
                "details": {
                    "totalDebt": "1105460110160593444366",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729273499,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xef0FCad90cDCa97825BAcF8A237b370c19E480d7",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "4336788864773864189395",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0xCAca94f3ce9bF9385Cdf995C0d08EdA5361bf23C",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1690623995
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x01B01C4A1F4C522aD341A9da5eaA48aF207ab3Ec",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "2239958595788636863",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-281/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x507c6dE33f50c0505F77F598c0B3CA7b5fEB3D68",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-alUSD-FRAXBP-f",
        "name": "Curve alUSD-FRAXBP Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xB30dA2376F63De30b42dC055C93fa474F31330A5",
            "name": "Curve alUSD-FRAXBP Pool",
            "symbol": "alUSDFRAXB3CRV-f",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This metapool contains FRAXBP (FRAX, USDC) and alUSD, a soft-pegged dollar synthetic debt asset via Alchemix.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "4038391949821473600",
            "tvl": 4.020660377979874,
            "price": 0.9956092494086952
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "fraxcrv",
                "netAPR": 6.345418386079549e+58,
                "composite": {
                    "boost": 1.9180872318099755,
                    "poolAPY": 0.0011200000000000001,
                    "boostedAPR": 5543.954034372457,
                    "baseAPR": 0.0850469814359811,
                    "cvxAPR": 81.93067252650923,
                    "rewardsAPR": 0.017704647918052263
                }
            }
        },
        "strategies": [
            {
                "address": "0x21AE27CFB6A650FA8cC10E8BC3bC09D7904d69B7",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1685706623
                }
            },
            {
                "address": "0x62Ce41ed2517AF1Eb118Ce7Df96919b86C5C6510",
                "name": "Convex Frax Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV and veFXS to earn CRV, CVX, and FXS (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1717242659,
                    "debtRatio": 8000
                }
            },
            {
                "address": "0x7CB6706A6c4F2a0c2F86C58d45954dF73FA4f7D0",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719057095
                }
            },
            {
                "address": "0x47bB3b124BB2c88F2812940a234ec6446419AAFa",
                "name": "StrategyCurveBoostedFactory-alUSDFRAXB3CRV-f",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494111,
                    "debtRatio": 2000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x507c6dE33f50c0505F77F598c0B3CA7b5fEB3D68",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-147/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xf45eec3B50658054755A5055173cEEB82c94Aa4e",
        "type": "Yearn Vault",
        "kind": "Multi Strategy",
        "symbol": "yPT-eBTC",
        "name": "yPT-eBTC Yearn Auto-Rolling Pendle PT",
        "category": "Pendle Autorollover",
        "version": "3.0.2",
        "description": "This vault invests into [Pendle PT Markets](https://app.pendle.finance/trade/markets) and automatically rolls them gas-free into the next maturity upon expiry. \u003cbr/\u003e\u003cbr/\u003eRead the [Pendle Docs](https://docs.pendle.finance/) to learn about the associated risks. Withdrawals may result in a loss depending on withdrawal size and current market conditions.",
        "decimals": 8,
        "chainID": 1,
        "token": {
            "address": "0x657e8C867D8B37dCC18fA4Caead9C45EB088C642",
            "name": "ether.fi BTC",
            "symbol": "eBTC",
            "description": "",
            "decimals": 8
        },
        "tvl": {
            "totalAssets": "1005094",
            "tvl": 687.60490728,
            "price": 68412
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0.05411664722096643,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0.05411664722096643
                }
            }
        },
        "strategies": [
            {
                "address": "0x512f80E15837C8Ac4aAf3F3b57bDa92C51f206F5",
                "name": "yPT-eBTC (auto-rolling Pendle PT)",
                "details": {
                    "totalDebt": "1005094",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 2000,
                    "lastReport": 1725794867,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xf45eec3B50658054755A5055173cEEB82c94Aa4e",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "100000000",
        "info": {
            "riskLevel": 3,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": true,
            "riskScore": [
                1,
                5,
                3,
                4,
                1,
                4,
                1,
                3,
                1,
                2,
                2
            ],
            "riskScoreComment": "Withdrawals can incur losses if the PT-SY exchange rate drops. Waiting for market maturity eliminates potential losses. Underlying SY contract which holds asset is upgradable"
        }
    },
    {
        "address": "0xdb25cA703181E7484a155DD612b06f57E12Be5F0",
        "type": "Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvYFI",
        "name": "YFI yVault",
        "category": "Volatile",
        "version": "0.4.3",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
            "name": "yearn.finance",
            "symbol": "YFI",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "180655880356584638428",
            "tvl": 823823.3324844902,
            "price": 4560.18
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.2,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.013228104132560146
            },
            "pricePerShare": {
                "today": 1.0132281041325601,
                "weekAgo": 1.0132281041325601,
                "monthAgo": 1.0132281041325601
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "",
                "netAPR": null,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null
                }
            }
        },
        "strategies": [
            {
                "address": "0xDfFe2E8B9DD8Cc0367AAED727c07a8d2bB36Ed8b",
                "name": "Aave Flashmint Folding",
                "description": "Supplies and borrows {{token}} on [AAVE](https://app.aave.com/home) simultaneously to maximize stAAVE earnings. Flashmints are used to mint DAI from [MakerDAO](https://oasis.app) to flashlend and fold the position, boosting the APY. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "179217445380268973",
                    "performanceFee": 0,
                    "lastReport": 1637631261
                }
            },
            {
                "address": "0x57b3255Af547b5efB9c7906D97E40659Dce0F5Ef",
                "name": "88 MPH Reinvest",
                "description": "Supplies {{token}} to [88 MPH](https://88mph.app/earn) to earn a fixed-rate yield and MPH tokens. Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "1",
                    "totalGain": "1321041943404454399",
                    "performanceFee": 0,
                    "lastReport": 1681746851
                }
            },
            {
                "address": "0xBB3f079B9788b53b605e105053dCdFC8F0B16668",
                "name": "Aave Lender Optimizer",
                "description": "Supplies {{token}} to [AAVE](https://app.aave.com/home) to generate interest and earn stkAAVE tokens. Once unlocked, earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "462972678018596506",
                    "performanceFee": 0,
                    "lastReport": 1692986399
                }
            },
            {
                "address": "0xbC27C4873D0ddE214387cE5a838DC78857633Ea2",
                "name": "StrategyMakerV2_YFI-A",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1225250820105872038",
                    "performanceFee": 0,
                    "lastReport": 1643067993
                }
            },
            {
                "address": "0xF06b5c192D1413e7A4DB1B2a9640500fdd83f1B2",
                "name": "Maker Delegate",
                "description": "Stakes {{token}} in [MakerDAO](https://oasis.app/borrow) vault and mints DAI. This newly minted DAI is then deposited into the DAI yVault to generate yield.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "103661496825826004",
                    "performanceFee": 0,
                    "lastReport": 1681224131
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xdb25cA703181E7484a155DD612b06f57E12Be5F0",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1013228104132560109",
        "info": {
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x944d749017053e0D37ec206c9898716A21e0B2E2",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-mUSD-f",
        "name": "Curve mUSD Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
            "name": "Curve mUSD Pool",
            "symbol": "crvMUSD",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This metapool contains 3Crv (DAI, USDC, and USDT) and Meta USD.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "87303765573942686668144",
            "tvl": 89681.88942806059,
            "price": 1.0272396481238113
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.025010269882741243
            },
            "pricePerShare": {
                "today": 1.0250102698827412,
                "weekAgo": 1.0250102698827412,
                "monthAgo": 1.0250102698827412
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.0034210534416979623,
                "composite": {
                    "boost": 2.129321342687803,
                    "poolAPY": 0.0038,
                    "boostedAPR": 0.0000011704907755134747,
                    "baseAPR": 5.497013306765552e-7,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x8778353f84C1839AAEd64aDaF527Ef29DaB3249D",
                "name": "StrategyCurveBoostedFactory-musd3CRV",
                "details": {
                    "totalDebt": "87303765573942686668144",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1730403599,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xec55dA47c5991d545DfE3A7c2F782925d09DB57e",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "3319023761709574213057",
                    "performanceFee": 0,
                    "lastReport": 1719490343
                }
            },
            {
                "address": "0x8b037A44706e67102291F2E0dB0935Cb2558581D",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1691016515
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x944d749017053e0D37ec206c9898716A21e0B2E2",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1025010269882741293",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/musd/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0x91aE8fEaBe09182Fe5F91Fc273040b7D8F7aeFE7",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USDP-f",
        "name": "Curve Paxos Factory yVault",
        "category": "Stablecoin",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xc270b3B858c335B6BA5D5b10e2Da8a09976005ad",
            "name": "Curve USDPax Pool",
            "symbol": "crvUSDPax",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This metapool contains 3Crv (DAI, USDC, and USDT) and USDP (USDPax).",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "936626021063161757971",
            "tvl": 982.5093244610965,
            "price": 1.0489878589384616
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.041595789289682314,
                "composite": {
                    "boost": 2.4999999999999996,
                    "poolAPY": 0.0161,
                    "boostedAPR": 0.030117543655202576,
                    "baseAPR": 0.012047017462081033,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x81350FB6E709d64f3b30677251711bD079B6a6f4",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719321059
                }
            },
            {
                "address": "0x4bE8d8CCCD2D637a5F4d0E84280EbC80A17c7527",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1679251439
                }
            },
            {
                "address": "0x14C738B3C4aEa1fc4D7a51c731199e3a5C34A510",
                "name": "StrategyCurveBoostedFactory-pax-usdp3CRV-f",
                "details": {
                    "totalDebt": "899884108141865043362",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1729301435,
                    "debtRatio": 10000
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0x91aE8fEaBe09182Fe5F91Fc273040b7D8F7aeFE7",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-v2-59/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xB25a14D81794884AE3ce69f14B5C97b4F50Eb8F3",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-USD3-rgUSD-f",
        "name": "Curve USD3-rgUSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xde73E407EFC75EdBAfc5bcD62Ebb1E7A9b38EBCD",
            "name": "rev USD3",
            "symbol": "USD3rgUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 2.020044
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.018000000000000002,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.02,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0xE00688e878349965a72EF6562be828DA379E58fF",
                "name": "StrategyCurveBoostedFactory-USD3rgUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1719494495,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xdFC093687F334Ab1B722D675F661d66516B29Dbc",
                "name": "StrategyCurveBoostedFactory-USD3rgUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1717448171
                }
            },
            {
                "address": "0xb786aD4970BEe3386366D1A9c32e0Cd54245e5Af",
                "name": "StrategyConvexFactory-USD3rgUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1717448171
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xB25a14D81794884AE3ce69f14B5C97b4F50Eb8F3",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/factory-twocrypto-27/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xE5323ca5B11EB8495C56473756De679e43168d57",
        "type": "Yearn Vault",
        "kind": "Single Strategy",
        "symbol": "ysGHO",
        "name": "StrategyGearboxLenderGHO",
        "category": "Volatile",
        "version": "3.0.2",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
            "name": "Gho Token",
            "symbol": "GHO",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 0.998397
        },
        "apr": {
            "type": "v3:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "v3:onchainOracle",
                "netAPR": 0,
                "composite": {
                    "boost": null,
                    "poolAPY": null,
                    "boostedAPR": null,
                    "baseAPR": null,
                    "cvxAPR": null,
                    "rewardsAPR": null,
                    "v3OracleCurrentAPR": 0,
                    "v3OracleStratRatioAPR": 0
                }
            }
        },
        "strategies": [],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xE5323ca5B11EB8495C56473756De679e43168d57",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "riskLevel": 2,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                3,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                2,
                5,
                3
            ]
        }
    },
    {
        "address": "0xD727551e619E54FB0d8d5aF30D3fE5c94F8615d6",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-ZETACRVUSD-f",
        "name": "Curve ZETACRVUSD Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0x119806f0e93a213029b599D7bBAE50bD965C2cC4",
            "name": "ZETA/crvUSD",
            "symbol": "ZETACRVUSD",
            "description": "",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "0",
            "tvl": 0,
            "price": 1.501869
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0
            },
            "pricePerShare": {
                "today": 1,
                "weekAgo": 1,
                "monthAgo": 1
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0,
                    "boostedAPR": 0,
                    "baseAPR": 0,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x76dBbB28F8e86007d5D4aA1096958182E4404Fe5",
                "name": "StrategyCurveBoostedFactory-ZETACRVUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1722769391,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0xDE6813EFB960cD54F644605741ee4A498E4Fbb85",
                "name": "StrategyConvexFactory-ZETACRVUSD",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1722769391
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xD727551e619E54FB0d8d5aF30D3fE5c94F8615d6",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1000000000000000000",
        "info": {
            "sourceURL": "https://curve.fi/#/fraxtal/pools/factory-twocrypto-23/deposit",
            "riskLevel": 0,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    {
        "address": "0xd6627F7dE81eB517A32F0F81537Ea2636B27B8CC",
        "type": "Automated Yearn Vault",
        "kind": "Legacy",
        "symbol": "yvCurve-wBETH-f",
        "name": "Curve wBETH Factory yVault",
        "category": "Curve",
        "version": "0.4.6",
        "decimals": 18,
        "chainID": 1,
        "token": {
            "address": "0xBfAb6FA95E0091ed66058ad493189D2cB29385E6",
            "name": "Curve wBETH Pool",
            "symbol": "ETHwBETHCRV",
            "description": "This token represents a Curve liquidity pool. Holders earn fees from users trading in the pool, and can also deposit the LP to Curve's gauges to earn CRV emissions. This metapool contains WETH and wBETH, which is [Binance's](https://www.binance.com/en) ethereum liquid staking product.",
            "decimals": 18
        },
        "tvl": {
            "totalAssets": "180099702659945025",
            "tvl": 463.41899225309,
            "price": 2573.124693759733
        },
        "apr": {
            "type": "v2:averaged",
            "netAPR": 0,
            "fees": {
                "performance": 0.1,
                "management": 0
            },
            "points": {
                "weekAgo": 0,
                "monthAgo": 0,
                "inception": 0.03326957713096901
            },
            "pricePerShare": {
                "today": 1.033269577130969,
                "weekAgo": 1.033269577130969,
                "monthAgo": 1.033269577130969
            },
            "extra": {
                "stakingRewardsAPR": null,
                "gammaRewardAPR": null
            },
            "forwardAPR": {
                "type": "crv",
                "netAPR": 0.07716337135901176,
                "composite": {
                    "boost": 2.5,
                    "poolAPY": 0.08560000000000001,
                    "boostedAPR": 0.00013707928779083112,
                    "baseAPR": 0.00005483171511633245,
                    "cvxAPR": 0,
                    "rewardsAPR": 0
                }
            }
        },
        "strategies": [
            {
                "address": "0x3af191Da32aB4691e5d06e8cd14dBbEF94728233",
                "name": "Curve Boost",
                "description": "Supplies {{token}} to [Curve Finance](https://curve.fi) and stakes it in gauge to collect any available tokens and earn enhanced CRV rewards thanks to [Yearn's locked CRV boost](https://docs.yearn.fi/getting-started/guides/how-boost-works). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "1745295674722661486",
                    "performanceFee": 0,
                    "lastReport": 1719321515
                }
            },
            {
                "address": "0xf1257a5aEf1eAb66454d7E6Dd9277f4Fb10E85C9",
                "name": "StrategyCurveBoostedFactory-ETHwBETHCRV",
                "details": {
                    "totalDebt": "180099702659945025",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1728220583,
                    "debtRatio": 10000
                }
            },
            {
                "address": "0x40e09246ae4e1C2D9e2A45155c011a23a4883625",
                "name": "Convex Reinvest",
                "description": "Supplies {{token}} to [Convex Finance](https://www.convexfinance.com/stake) boosted by Convex's veCRV to earn CRV and CVX (and any other available tokens). Earned tokens are harvested, sold for more {{token}} which is deposited back into the strategy.",
                "details": {
                    "totalDebt": "0",
                    "totalLoss": "0",
                    "totalGain": "0",
                    "performanceFee": 0,
                    "lastReport": 1694173103
                }
            }
        ],
        "staking": {
            "address": "",
            "available": false,
            "source": "",
            "rewards": null
        },
        "migration": {
            "available": false,
            "address": "0xd6627F7dE81eB517A32F0F81537Ea2636B27B8CC",
            "contract": "0x0000000000000000000000000000000000000000"
        },
        "featuringScore": 0,
        "pricePerShare": "1033269577130969028",
        "info": {
            "sourceURL": "https://curve.fi/#/ethereum/pools/wbeth/deposit",
            "riskLevel": -1,
            "isRetired": false,
            "isBoosted": false,
            "isHighlighted": false,
            "riskScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    }
]