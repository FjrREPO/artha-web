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
    }
]