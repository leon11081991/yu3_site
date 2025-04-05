export const PROJECT_DATA = {
  waca: {
    info: {
      title: 'WACA - 商品多規格設定',
      information: [
        {
          id: 'waca-info-1',
          label: '專案時間',
          content: '2024',
          isTagType: false
        },
        {
          id: 'waca-info-2',
          label: '負責項目',
          content:
            'Wireframe、Prototype、Mockup製作、RWD斷點出圖，參與Flowchart討論、與PO、UX、前端密切溝通。',
          isTagType: false
        },
        {
          id: 'waca-info-3',
          label: '類型項目',
          content: ['B2B', 'Web', 'UI'],
          isTagType: true
        },
        {
          id: 'waca-info-4',
          label: '團隊成員',
          content: '產品負責人(PO) / UI設計師 / UX設計師 / 前端工程師 / 後端工程師',
          isTagType: false
        },
        {
          id: 'waca-info-5',
          label: '擔任角色',
          content: 'UI 設計師',
          isTagType: false
        }
      ]
    },
    about: {
      title: '關於專案 / About Project',
      descriptions: [
        {
          id: 'waca-about-info-1',
          label: '產品背景',
          content:
            'WACA 是專為台灣中小型品牌而生的網路開店服務，致力於提供簡單快速的開店流程、及低門檻的開店預算，幫助商家及個人賣家打造品牌電商。'
        },
        {
          id: 'waca-about-info-2',
          label: '專案目標',
          content:
            '<span class="text-secondary-03">提升商品多規格設定的易用性與效率，讓商家能快速理解與管理商品規格</span>，進而提高商品上架與管理的效率。並確保前後台顯示一致性，提升整體使用體驗。'
        }
      ],
      notice:
        '因簽署產品商業模式保密協議，因此部分細節屬於商業機密，不便展示僅擷取重要資訊並簡化呈現內容'
    },
    challenge: {
      title: '設計挑戰 / Challenge',
      descriptions: [
        {
          id: 'waca-challenge-des-1',
          label: '挑戰難度',
          content:
            '如何在不變更資料結構的前提下，重新設計操作流程與介面呈現，使其更加直觀且高效。同時需滿足使用者能夠快速建立、管理商品規格的目標。'
        }
      ],
      pointList: [
        {
          id: 'waca-challenge-point-1',
          content: '如何將資訊化繁為簡？'
        },
        {
          id: 'waca-challenge-point-2',
          content: '需保持資料完整性進行優化。'
        },
        {
          id: 'waca-challenge-point-3',
          content: '當面臨與舊資料衝突時，該如何解決？'
        }
      ]
    },
    process: {
      title: '專案流程 / Project Process',
      descriptions: null,
      images: [
        {
          src: '/images/waca/waca-process.avif',
          alt: 'WACA 專案流程',
          placeholder: '/images/waca/waca-process.avif',
          width: 1122,
          height: 363
        }
      ]
    },
    problem: {
      title: '定義問題 / Problem',
      descriptions: [
        {
          id: 'waca-about-info-1',
          label: '使用痛點',
          content:
            '在電商或零售平台上，商家經常需要為商品設定多種規格，例如顏色、尺寸、材質等。<span class="text-secondary-03">現行的商品多規格設定功能存在諸多使用上的痛點</span>，影響了上架效率與操作體驗，進而降低商家的工作效率與準確性。'
        }
      ],
      information: [
        {
          id: 'waca-problem-info-1',
          title: '欄位資訊過於密集',
          desc: '介面中包含大量的輸入欄位且間距較小，閱讀與輸入時容易產生混淆。'
        },
        {
          id: 'waca-problem-info-2',
          title: '規格設定方式不直觀',
          desc: '規格名稱的輸入方式讓使用者可能無法立即理解該如何設定單層與雙層規格'
        },
        {
          id: 'waca-problem-info-3',
          title: '重複操作步驟過多',
          desc: '當需要新增多個規格時，需不斷手動填寫相似的內容，例如「紅色-S」、「紅色-M」等'
        }
      ]
    },
    designProcess: {
      title: '設計過程 / Design Process',
      descriptions: [
        {
          id: 'waca-designProcess-des-1',
          label: '版本一：初步優化商品規格設定',
          content:
            '根據UX設計師提供的 Flowchart，<span class="text-secondary-03">我繪製了 Wireframe，重新排序欄位層級、並針對資訊密集的痛點進行優化，改進了商品規格的列表呈現。</span>為避免規格交叉加乘導致資料量過大，我們新增了一項限制，讓使用者最多只能建立 60 組商品規格，以確保系統運行穩定。<span class="text-gray-04">（如欲查看完整流程圖請點選下方連結。）</span>'
        }
      ],
      referenceLinks: [
        {
          id: 'waca-referenceLink-1',
          label: 'Flowchart連結',
          link: 'https://whimsical.com/1-HCgidWooytQ4CuqhLmRbXR'
        },
        {
          id: 'waca-referenceLink-2',
          label: 'Wireframe連結',
          link: 'https://whimsical.com/T5ZmyWpGrVWMKQzof6zkUJ'
        }
      ],
      Optimizations: [
        {
          id: 'waca-designProcess-Opt-1',
          isOptimized: false,
          title: '現行產品',
          image: {
            src: '/images/waca/waca-designProcess-1.avif',
            alt: 'WACA 專案流程',
            placeholder: '/images/waca/waca-designProcess-1.avif',
            width: 1042,
            height: 357
          }
        },
        {
          id: 'waca-designProcess-Opt-2',
          isOptimized: true,
          title: '優化版本一',
          image: {
            src: '/images/waca/waca-designProcess-2.avif',
            alt: 'WACA 專案流程',
            placeholder: '/images/waca/waca-designProcess-2.avif',
            width: 1042,
            height: 357
          }
        }
      ]
    },
    issue: {
      title: '遇到的困難 / Issue',
      descriptions: [
        {
          id: 'waca-issue-des-1',
          label: '問題：與舊資料有衝突',
          content:
            '工程師在處理資料時發現，現行的單層規格設定邏輯存在許多規格發散的問題<span class="text-gray-04">(如圖所示)</span>。新設計的規格歸類與交叉建立邏輯雖然能提升操作效率，但可能導致舊有資料在編輯時難以管理，並造成大量的資料生成，影響系統效能。'
        }
      ],
      images: [
        {
          src: '/images/waca/waca-issue.avif',
          alt: 'WACA 專案流程',
          placeholder: '/images/waca/waca-issue.avif',
          width: 778,
          height: 323
        }
      ]
    },
    solution: {
      title: '解決辦法 / Solution',
      descriptions: [
        {
          id: 'waca-solution-des-1',
          label: '版本二：UI 介面與交互優化',
          content:
            '經過評估後，<span class="text-secondary-03">我們選擇折衷方案——保留原產品的「列表編輯模式」。</span>這樣一來，有資料衝突的用戶仍能維持原有資料的完整性，同時讓需要快速建立規格的用戶依然能順利使用這項功能。'
        }
      ],
      referenceLinks: [
        {
          id: 'waca-solution-referenceLink-1',
          label: 'Flowchart連結',
          link: 'https://whimsical.com/2-Lg7nmhJUmrvGAumtGcPhga'
        },
        {
          id: 'waca-solution-referenceLink-2',
          label: 'Wireframe連結',
          link: 'https://whimsical.com/V3EsHJd2XZsBbJMmtuZQnD'
        }
      ],
      Optimizations: [
        {
          id: 'waca-solution-Opt-1',
          isOptimized: true,
          title: '優化版本二',
          image: {
            src: '/images/waca/waca-designProcess-3.avif',
            alt: 'WACA 專案流程',
            placeholder: '/images/waca/waca-designProcess-3.avif',
            width: 796,
            height: 317
          }
        }
      ]
    },
    designResults: {
      title: '設計成果 / Design Results',
      descriptions: [
        {
          id: 'waca-designResults-des-1',
          label: '最終成果',
          content:
            '透過上述優化，<span class="text-secondary-03">我們成功改善了商品規格的建立與管理方式，使商品規格編輯更加直觀，提升了操作的效率</span>，同時確保資料管理的穩定性，提升了整體使用體驗。'
        }
      ],
      Optimizations: [
        {
          id: 'waca-solution-Opt-1',
          isOptimized: true,
          title: '最終版',
          image: {
            src: '/images/waca/waca-designProcess-4.avif',
            alt: 'WACA 專案流程',
            placeholder: '/images/waca/waca-designProcess-4.avif',
            width: 1042,
            height: 357
          }
        }
      ]
    },
    reflection: {
      title: '學習&反思 / Reflection',
      descriptions: [
        {
          id: 'waca-reflection-des-1',
          label: '學習成果',
          content:
            '第一次接觸電商產業的產品優化，並且產品也已發展至一定的成熟度，實作過程中，經常因系統複雜、諸多特殊情境，導致交接設計文件時經常發生反覆溝通確認的情況，為配合敏捷式的開發步調，<span class="text-secondary-03">我學會交付更完整的設計文件，減少工程師需來回查看Flowchart & Mockup 的繁瑣過程，提升團隊協作的效率</span>，讓團隊中不同的角色PO、UX、前後端工程師，皆能快速同步，使整體的專案過程順利進行。</span>'
        }
      ],
      reflectionList: [
        {
          id: 'waca-reflection-1',
          content: '新功能不一定適合所有情境，需要考量舊有資料與使用習慣，避免增加用戶負擔。'
        },
        {
          id: 'waca-reflection-2',
          content: '前期的密切溝通與取得共識可以讓專案協作的更流暢。'
        },
        {
          id: 'waca-reflection-3',
          content: '找到目標、體驗、限制之間的平衡點是非常重要的事。'
        }
      ]
    }
  },
  kol: {
    info: {
      title: 'KOL Master 網紅媒合平台',
      information: [
        {
          id: 'kol-info-1',
          label: '專案時間',
          content: '2020',
          isTagType: false
        },
        {
          id: 'kol-info-2',
          label: '負責項目',
          content: '競品分析、使用者訪談、流程設計、介面設計、設計規範產出。',
          isTagType: false
        },
        {
          id: 'kol-info-3',
          label: '類型項目',
          content: ['B2B', 'Web', 'UI/UX'],
          isTagType: true
        },
        {
          id: 'kol-info-4',
          label: '團隊成員',
          content: '產品經理(PM) / UIUX設計師 / 前端工程師 / 後端工程師',
          isTagType: false
        },
        {
          id: 'kol-info-5',
          label: '擔任角色',
          content: 'UI/UX 設計師',
          isTagType: false
        }
      ]
    },
    about: {
      title: '關於專案 / About Project',
      descriptions: [
        {
          id: 'kol-about-info-1',
          label: '專案背景',
          content:
            '在這資訊爆炸的時代，<span class="text-secondary-04">KOL已成為數位行銷的最佳推手，也就是「網紅行銷」</span>。由於越來越多品牌有網紅行銷的需求，為了替廣告主創造個性化服務、使網紅商業合作更加迅速流暢，因此有了網紅媒合平台的誕生。'
        },
        {
          id: 'kol-about-info-2',
          label: '產品目標',
          content:
            '打造一個數據驅動、高效匹配、簡單易用的KOL行銷平台，讓廣告主能夠輕鬆找到適合的KOL，並透過產品提升行銷成效，降低試錯成本。（成為廣告主與KOL中間的協調者，起到媒合、協調的作用，進行雙向媒合的商業行為。)'
        }
      ]
    },
    challenge: {
      title: '設計挑戰 / Challenge',
      descriptions: [
        {
          id: 'kol-challenge-info-1',
          label: '設計的挑戰',
          content:
            '目前市場上已經有許多KOL平台，如KOL Radar、Influencer圈圈科技、台灣KOL等，如何做出差異化？並且從現有的市場找出可切入的機會點？一人設計師如何產出0到1的產品？'
        }
      ],
      pointList: [
        {
          id: 'kol-challenge-point-1',
          content: '一人設計師如何產出0到1的產品？'
        },
        {
          id: 'kol-challenge-point-2',
          content: '如何做出差異化？'
        },
        {
          id: 'kol-challenge-point-3',
          content: '切入市場的機會為何？'
        }
      ]
    },
    process: {
      title: '設計流程 / Design Process',
      descriptions: null,
      images: [
        {
          src: '/images/kol/kol-process.avif',
          alt: 'KOL Master 專案流程',
          placeholder: '/images/kol/kol-process.avif',
          width: 1122,
          height: 402
        }
      ]
    },
    analysis: {
      title: '競品分析 / Competitive Analysis',
      descriptions: [
        {
          id: 'kol-analysis-des-1',
          label: '競品分析&關鍵洞察',
          content:
            '以當前市佔率較高的產品進行分析，分別為「KOL Radar」、「Influencer圈圈科技」、「台灣KOL」，了解各項產品的優劣勢並制定產品策略以便能夠充分利用機會切入和改善劣勢。<span class="text-gray-04">(以2020年當時研究數據為主)</span>'
        }
      ],
      analysisChart: {
        image: {
          id: 'kol-analysisChart-1',
          src: '/images/kol/kol-analysis.avif',
          alt: 'KOL Master 競品分析圖',
          placeholder: '/images/kol/kol-analysis.avif',
          width: 1122,
          height: 282
        }
      },
      analysisList: [
        {
          id: 'kol-analysisList-1',
          companyLogo: '/images/kol/kolradar.avif',
          companyName: 'KOL Radar 網紅雷達',
          content: '提供以數據為核心的網紅媒合解決方案，快速找到最符合需求的網紅。',
          pros: '精準的網紅資料庫，方便品牌篩選合適的KOL',
          cons: '預算門檻高，無法直接刊登合作專案'
        },
        {
          id: 'kol-analysisList-2',
          companyLogo: '/images/kol/influencer.avif',
          companyName: 'Influencer圈圈科技',
          content: '專注於為中小型企業和個人品牌提供平價、易操作的網紅媒合服務。',
          pros: '具備網紅資料庫與專案刊登功能、價格親民',
          cons: '僅支援Instagram社群，使用彈性受限'
        },
        {
          id: 'kol-analysisList-3',
          companyLogo: '/images/kol/taiwankol.avif',
          companyName: '台灣KOL',
          content: '強調本地化網紅資源的精準匹配，幫助品牌提升在地影響力。',
          pros: '品牌方可以刊登合作專案，吸引KOL主動報名',
          cons: '平台規模小，缺乏詳細的網紅數據分析功能'
        }
      ],
      conclusion: [
        {
          id: 'kol-analysis-conclusion-1',
          content:
            '透過競品分析我們發現目前市場上可能存在的問題，包含現行KOL行銷平台多採用單點功能模式，導致使用者需跨平台滿足不同需求，雖然市場上已有不同功能的解決方案，但這些平台仍無法提供完整、流暢的使用體驗。'
        }
      ]
    },
    interview: {
      title: '用戶訪談 / User Interview',
      descriptions: [
        {
          id: 'kol-interview-des-1',
          label: '訪談目的',
          content:
            '透過用戶訪談驗證這些需求是真實存在的，且目前市場上的主流競品尚未提供完善的解決方案。'
        }
      ],
      interviewList: [
        {
          id: 'kol-interview-list-1',
          character: '品牌老闆',
          avatar: '/images/kol/kol-user1.avif',
          comment: '同時要找網紅及刊登案件，就要訂閱兩個產品，增加預算',
          wish: '希望有滿足兩種需求的產品，可以讓我避免重複付費和切換工具的麻煩',
          conclusions: [
            {
              id: 'kol-interview-list-conclusion-1',
              content: '減少切換工具的困擾'
            },
            {
              id: 'kol-interview-list-conclusion-2',
              content: '能夠更專注在同一個平台'
            }
          ]
        },
        {
          id: 'kol-interview-list-2',
          character: '行銷人員',
          avatar: '/images/kol/kol-user2.avif',
          comment: '網紅數據分析介面有許多圖表，瀏覽起來不容易吸收',
          wish: '我想要在做網紅成效評估時，減少思考的時間做出更精準的決策',
          conclusions: [
            {
              id: 'kol-interview-list-conclusion-3',
              content: '簡化呈現關鍵資訊'
            },
            {
              id: 'kol-interview-list-conclusion-4',
              content: '希望能更有效率的完成評估'
            }
          ]
        },
        {
          id: 'kol-interview-list-3',
          character: '業務人員',
          avatar: '/images/kol/kol-user3.avif',
          comment: '平台都是由專人接洽，經常傳達有誤，導致合作結果不理想',
          wish: '過去因傳遞過程中出現誤差，影響合作細節因此更希望能減少中間環節',
          conclusions: [
            {
              id: 'kol-interview-list-conclusion-5',
              content: '避免影響合作結果'
            },
            {
              id: 'kol-interview-list-conclusion-6',
              content: '希望能有直接溝通網紅的機會'
            }
          ]
        }
      ]
    },
    insight: {
      title: '研究洞察 / Insight',
      descriptions: [
        {
          id: 'kol-insight-des-1',
          label: '市場機會',
          content:
            '透過競品分析與用戶訪談的交叉驗證，針對這些未被滿足的需求，<span class="text-secondary-04">我們確認它們具備市場潛力，並有機會創造產品價值。</span>我們的產品將專注於解決這些需求，並以此作為主要競爭力。'
        }
      ],
      image: {
        src: '/images/kol/kol-insight.avif',
        alt: 'Pingo 美食搜集神器架構',
        placeholder: '/images/kol/kol-insight.avif',
        width: 1122,
        height: 286.34
      }
    },
    sitemap: {
      title: '網站架構 / Sitemap',
      descriptions: [
        {
          id: 'kol-sitemap-des-1',
          label: null,
          content: '與PM、工程師討論出主要的產品架構圖，並初步預估開發時間。'
        }
      ],
      indicators: [
        {
          id: 'kol-sitemap-indicator-1',
          labelText: '獨立頁面',
          labelType: {
            type: 'filled',
            size: 'normal',
            color: 'gray-01'
          }
        },
        {
          id: 'kol-sitemap-indicator-2',
          labelText: '用戶身份',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'secondary-04'
          }
        },
        {
          id: 'kol-sitemap-indicator-3',
          labelText: '分類Tab',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'gray-02'
          }
        }
      ],
      images: [
        {
          src: '/images/kol/kol-sitemap.avif',
          alt: 'Pingo 美食搜集神器架構',
          placeholder: '/images/kol/kol-sitemap.avif',
          width: 792,
          height: 672
        }
      ]
    },
    wireframe: {
      title: '線框稿件 / WireFrame',
      descriptions: [
        {
          id: 'kol-wireframe-des-1',
          label: '規劃目的',
          content:
            '由於新創團隊資源有限，無法投入過多時間逐一核對頁面細節，因此快速繪製快速繪製Lo-fi WireFrame闡述設計思路及流程，方便與內部團隊及利害關係人溝通。'
        }
      ],
      images: [
        {
          id: 'kol-wireframe-img-1',
          src: '/images/kol/kol-wireframe.avif',
          alt: 'Kol 行銷wireframe圖',
          placeholder: '/images/kol/kol-wireframe.avif',
          width: 566,
          height: 588.45
        }
      ]
    },
    guideline: {
      title: '設計規範 / Design Guideline',
      descriptions: null,
      information: [
        {
          id: 'kol-guideline-information-1',
          type: 'font',
          content: [
            {
              id: 'kol-guideline-information-content-1',
              label: 'Typography',
              image: {
                id: 'kol-guideline-information-img-1',
                src: '/images/kol/kol-guideline-typography-1.avif',
                alt: 'Kol 行銷wireframe圖',
                placeholder: '/images/kol/kol-guideline-typography-1.avif',
                width: 549,
                height: 74
              }
            },
            {
              id: 'kol-guideline-information-content-2',
              label: null,
              image: {
                id: 'kol-guideline-information-img-2',
                src: '/images/kol/kol-guideline-typography-2.avif',
                alt: 'Kol 行銷wireframe圖',
                placeholder: '/images/kol/kol-guideline-typography-2.avif',
                width: 549,
                height: 74
              }
            }
          ]
        },
        {
          id: 'kol-guideline-information-2',
          type: 'color',
          content: [
            {
              id: 'kol-guideline-information-content-3',
              label: 'Brand Color',
              image: {
                id: 'kol-guideline-information-img-3',
                src: '/images/kol/kol-guideline-color-1.avif',
                alt: 'Kol 顏色',
                placeholder: '/images/kol/kol-guideline-color-1.avif',
                width: 549,
                height: 100
              }
            },
            {
              id: 'kol-guideline-information-content-4',
              label: 'Gray Scale',
              image: {
                id: 'kol-guideline-information-img-4',
                src: '/images/kol/kol-guideline-color-2.avif',
                alt: 'Kol 行銷wireframe圖',
                placeholder: '/images/kol/kol-guideline-color-2.avif',
                width: 549,
                height: 100
              }
            }
          ]
        },
        {
          id: 'kol-guideline-information-3',
          type: 'component',
          content: [
            {
              id: 'kol-guideline-information-content-3',
              label: 'Component',
              image: {
                id: 'kol-guideline-information-img-3',
                src: '/images/kol/kol-guideline-component.avif',
                alt: 'Kol 行銷wireframe圖',
                placeholder: '/images/kol/kol-guideline-component.avif',
                width: 1122,
                height: 1124
              }
            }
          ]
        }
      ]
    },
    uiDesign: {
      title: '成果展示 / UI Design',
      descriptions: [
        {
          id: 'kol-uiDesign-des-1',
          label: '規劃目的',
          content:
            '為確保介面在美感與操作便利性之間取得最佳平衡，我們製作了Prototype，透過內部團隊的實測與回饋進行多次迭代優化。標示有<span class="text-secondary-04">「測試優化」</span>的區塊，即為根據測試結果調整後的最終成果。'
        }
      ],
      information: [
        {
          id: 'kol-uiDesign-info-1',
          hasBgColor: false,
          content: [
            {
              id: 'kol-uiDesign-info-content-1',
              field: '<span class="text-secondary-04">Home</span>',
              heading: '產品首頁',
              subheading: '初次來到產品首頁，有清晰的用戶引導',
              hasSwiper: false,
              associateWithNext: false,
              associateWithPrev: false,
              images: [
                {
                  id: 'uiDesign-img-1',
                  src: '/images/kol/kol-design-1.avif',
                  alt: 'Kol產品首頁精稿圖',
                  placeholder: '/images/kol/kol-design-1.avif',
                  width: 1048,
                  height: 442
                }
              ]
            },
            {
              id: 'kol-uiDesign-info-content-2',
              field: '<span class="text-secondary-04">Search</span>',
              heading: '網紅搜尋',
              subheading: '直觀的搜尋欄，輕鬆查找匹配網紅',
              hasSwiper: false,
              associateWithNext: false,
              associateWithPrev: false,
              images: [
                {
                  id: 'uiDesign-img-2',
                  src: '/images/kol/kol-design-2.avif',
                  alt: 'Kol網紅搜尋精稿圖',
                  placeholder: '/images/kol/kol-design-2.avif',
                  width: 988,
                  height: 410
                }
              ]
            },
            {
              id: 'kol-uiDesign-info-content-3',
              field: '<span class="text-secondary-04">Influencer</span>',
              heading: '網紅檔案',
              subheading: '資訊層級分明，數據視覺化呈現',
              hasSwiper: false,
              associateWithNext: false,
              associateWithPrev: false,
              images: [
                {
                  id: 'uiDesign-img-3',
                  src: '/images/kol/kol-design-3.avif',
                  alt: 'Kol網紅檔案精稿圖',
                  placeholder: '/images/kol/kol-design-3.avif',
                  width: 988,
                  height: 773
                }
              ]
            },
            {
              id: 'kol-uiDesign-info-content-3',
              field: '<span class="text-secondary-04">Project</span>',
              heading: '我的專案',
              subheading: '一目了然的專案管理列表',
              hasSwiper: false,
              associateWithNext: true,
              associateWithPrev: false,
              images: [
                {
                  id: 'uiDesign-img-4',
                  src: '/images/kol/kol-design-4.avif',
                  alt: 'Kol我的專案精稿圖',
                  placeholder: '/images/kol/kol-design-4.avif',
                  width: 1096,
                  height: 473
                }
              ]
            },
            {
              id: 'kol-uiDesign-info-content-3',
              field: '<span class="text-secondary-04">Create</span>',
              heading: '建立專案',
              subheading: '步驟式流程表單，降低認知負擔',
              hasSwiper: true,
              associateWithNext: false,
              associateWithPrev: true,
              images: [
                {
                  id: 'uiDesign-img-5',
                  src: '/images/kol/kol-design-5.avif',
                  alt: 'Kol建立專案1',
                  placeholder: '/images/kol/kol-design-5.avif',
                  width: 988,
                  height: 350
                },
                {
                  id: 'uiDesign-img-6',
                  src: '/images/kol/kol-design-6.avif',
                  alt: 'Kol建立專案2',
                  placeholder: '/images/kol/kol-design-6.avif',
                  width: 988,
                  height: 350
                },
                {
                  id: 'uiDesign-img-7',
                  src: '/images/kol/kol-design-7.avif',
                  alt: 'Kol建立專案3',
                  placeholder: '/images/kol/kol-design-7.avif',
                  width: 988,
                  height: 350
                }
              ]
            }
          ]
        },
        {
          id: 'kol-uiDesign-info-2',
          hasBgColor: true,
          content: [
            {
              id: 'kol-uiDesign-info-content-2-1',
              field: '<span class="text-secondary-04">Search</span>',
              heading: '案件搜尋',
              subheading: '創作者可快速篩選、瀏覽廣告主刊登的合作案件',
              hasSwiper: false,
              associateWithNext: false,
              associateWithPrev: false,
              images: [
                {
                  id: 'kol-uiDesign-img-8',
                  src: '/images/kol/kol-design-8.avif',
                  alt: 'Kol案件搜尋精稿圖',
                  placeholder: '/images/kol/kol-design-8.avif',
                  width: 988,
                  height: 410
                }
              ]
            },
            {
              id: 'kol-uiDesign-info-content-2-2',
              field: '<span class="text-secondary-04">Information</span>',
              heading: '案件詳情頁',
              subheading: '詳細說明合作內容細項，並提供報名按鈕',
              hasSwiper: false,
              associateWithNext: false,
              associateWithPrev: false,
              images: [
                {
                  id: 'uiDesign-img-9',
                  src: '/images/kol/kol-design-9.avif',
                  alt: 'Kol案件詳情頁精稿圖',
                  placeholder: '/images/kol/kol-design-9.avif',
                  width: 988,
                  height: 830
                }
              ]
            }
          ]
        },
        {
          id: 'kol-uiDesign-info-3',
          hasBgColor: false,
          content: [
            {
              id: 'kol-uiDesign-info-content-3-1',
              field: '<span class="text-secondary-04">Browsing</span>',
              heading: 'KOL報名列表',
              subheading: '快速管理合作專案KOL人選',
              hasSwiper: false,
              associateWithNext: true,
              associateWithPrev: false,
              images: [
                {
                  id: 'kol-uiDesign-img-10',
                  src: '/images/kol/kol-design-10.avif',
                  alt: 'KOL報名列表精稿圖',
                  placeholder: '/images/kol/kol-design-10.avif',
                  width: 988,
                  height: 488
                }
              ]
            },
            {
              id: 'kol-uiDesign-info-content-3-2',
              field: '<span class="text-secondary-04">Message</span>',
              heading: '我的訊息',
              subheading: '提供廣告主與創作者間的溝通管道',
              hasSwiper: false,
              associateWithNext: false,
              associateWithPrev: true,
              images: [
                {
                  id: 'kol-uiDesign-img-11',
                  src: '/images/kol/kol-design-11.avif',
                  alt: 'KOL我的訊息精稿圖',
                  placeholder: '/images/kol/kol-design-11.avif',
                  width: 988,
                  height: 387
                }
              ]
            }
          ]
        }
      ]
    },
    reflection: {
      title: '學習&反思 / Reflection',
      descriptions: [
        {
          id: 'kol-reflection-des-1',
          label: null,
          content:
            '<span class="text-gray-04">透過0到1的產品建立過程中，為期快一年的時間，以下是我學習到的：</span>'
        },
        {
          id: 'kol-reflection-des-2',
          label: null,
          content:
            '在製作產品的過程中，<span class="text-secondary-04">需求經常會被競業的定位帶偏，導致任何功能都想做，造成產品定位模糊的窘境</span>，而我透過競品分析研究，總結出各產品的定位以及優缺點，幫助PM釐清並審視產品的方向，讓團隊繼續前進。'
        },
        {
          id: 'kol-reflection-des-3',
          label: null,
          content:
            '由於在新創團隊的環境，沒有過多的資源可以做前置作業，省略了Flow Chart的產出，導致開發與設計之間的認知有誤差，因此在資源有限的情況下，我選擇產出簡易的Wireframe方便與工程師溝通討論大致的輪廓及流程，大幅的提升了工作的效率。'
        }
      ],
      reflectionList: [
        {
          id: 'kol-reflection-info-1',
          content: '產品定位明確，可避免失去方向。'
        },
        {
          id: 'kol-reflection-info-2',
          content: '資源有限時，設計過程需適時調整。'
        },
        {
          id: 'kol-reflection-info-3',
          content: '與PM、工程師協作時溝通至關重要。'
        }
      ]
    }
  },
  pingo: {
    info: {
      title: 'Pingo 美食搜集神器（Redesign）',
      information: [
        {
          id: 'pingo-info-1',
          label: '專案時間',
          content: '2020',
          isTagType: false
        },
        {
          id: 'pingo-info-2',
          label: '負責項目',
          content: '使用者研究、流程優化、易用性測試、介面設計',
          isTagType: false
        },
        {
          id: 'pingo-info-3',
          label: '類型項目',
          content: ['APP', 'UI/UX', 'Redesign'],
          isTagType: true
        },
        // {
        //   id: 'pingo-info-4',
        //   label: '團隊成員',
        //   content: 'UIUX設計師',
        //   isTagType: false
        // },
        {
          id: 'pingo-info-5',
          label: '擔任角色',
          content: 'UI/UX 設計師',
          isTagType: false
        }
      ]
    },
    about: {
      title: '關於專案 / About Project',
      descriptions: [
        {
          id: 'pingo-about-info-1',
          label: '產品介紹',
          content:
            'Pingo是ㄧ款專為Instagram愛好者打造的口袋清單App，<span class="text-secondary-02">幫助使用者將收藏的景點、美食匯集成清單</span>，並將其分類，以及相關的店家資訊，大量減少了使用者搜尋景點及美食的時間，也因此受到大量使用者的喜愛。'
        },
        {
          id: 'pingo-about-info-2',
          label: '期望目標',
          content:
            '這一次Redesign的主要目標是<span class="text-secondary-02">優化現階段的使用流程＆產品體驗</span>，讓使用者在操作上更直覺並符合使用者的需求，提升用戶的黏著度與滿意度。'
        }
      ]
    },
    backgroundResearch: {
      title: '背景研究 / Background Research',
      dataSources: [
        {
          title: 'Z世代透過哪些渠道搜尋餐廳',
          source: 'Tech Orange 科技報橘',
          chartSources: [
            {
              id: 1,
              type: 'Instagram',
              percentage: 40,
              showPercentage: true,
              isHighlight: true
            },
            {
              id: 2,
              type: 'Google',
              percentage: 35,
              showPercentage: false,
              isHighlight: false
            },
            {
              id: 3,
              type: 'Other',
              percentage: 25,
              showPercentage: false,
              isHighlight: false
            }
          ]
        },
        {
          title: '透過Instagram關注內容',
          source: '動腦Brain',
          chartSources: [
            {
              id: 1,
              type: '美食/部落客',
              percentage: 55,
              showPercentage: true,
              isHighlight: true
            },
            {
              id: 2,
              type: '旅遊/景點',
              percentage: 53,
              showPercentage: true,
              isHighlight: true
            },
            {
              id: 3,
              type: '時尚/美妝',
              percentage: 42,
              showPercentage: true,
              isHighlight: false
            }
          ]
        }
      ],
      information: [
        {
          label: '研究洞察',
          content:
            '隨著社群平台蓬勃發展，消費者獲取美食資訊的管道也有所轉變，從過去依賴電視、報章雜誌或是搜尋引擎，現在已逐漸轉移到美食內容多元豐富的社群平台上，根據數據顯示<span class="text-secondary-02">超過40％的Z世代的年輕人</span>會透過Instagram搜尋美食、景點。'
        },
        {
          label: null,
          content:
            '之所以如此是因為用戶普遍<span class="text-secondary-02">對「視覺形式豐富」的搜索和發現更感興趣</span>，也因此帶動美食搜尋社群化的趨勢。此外使用Instagram的用戶族群除了關注美食外，<span class="text-secondary-02">旅遊/景點也是用戶熱門關注的內容。</span>'
        }
      ]
    },
    userResearch: {
      title: '使用者研究 / User Research',
      descriptions: [
        {
          id: 'pingo-research-des-1',
          label: '用戶評論',
          content:
            '根據二手資料如App評分、網路評論彙整使用者的使用反饋，總結出以下較常出現的痛點內容。'
        }
      ],
      researches: [
        {
          id: 1,
          title: '地圖介面易誤觸',
          content:
            '當收藏項目數量過多時，地圖介面上的標記顯示過於密集，導致畫面顯得雜亂無章，不僅瀏覽上有負擔也容易誤觸。',
          userImage: '/images/pingo/pingo-user1.avif'
        },
        {
          id: 2,
          title: '搜尋結果大雜燴',
          content:
            '有時候只想找美食或景點，但搜尋結果會把美食與景點都混在其中，難以找到想要的內容。',
          userImage: '/images/pingo/pingo-user2.avif'
        },
        {
          id: 3,
          title: '收藏分類單一',
          content:
            '目前產品的收藏頁面僅提供「美食」與「景點」兩種分類，分類方式過於單一，無法根據個人喜好分類。',
          userImage: '/images/pingo/pingo-user3.avif'
        },
        {
          id: 4,
          title: '互動體驗不佳',
          content:
            '店家詳情頁中的資訊呈現方式不夠明確，部分資訊可以點擊進一步操作或查看，但部分則無法點擊。',
          userImage: '/images/pingo/pingo-user4.avif'
        }
      ]
    },
    insights: {
      title: '設計洞察 /  insights',
      descriptions: [
        {
          id: 1,
          label: '設計觀點',
          content:
            '使用者容易在搜尋＆查找過去已收藏的美食、景點情境時，感到困難，不難發現<span class="text-secondary-02">對使用者來說快速的找到該目標項目及資訊是很重要的。</span>'
        }
      ],
      informations: [
        {
          id: 1,
          title: '使用者',
          content: '一位打開Pingo想搜尋過去已收藏項目的使用者。'
        },
        {
          id: 2,
          title: '使用者的需求',
          content: '需要在搜尋及查找時能更快速的找到美食、景點。'
        },
        {
          id: 3,
          title: '我的洞察',
          content: '因為對他來說能快速的找到該資訊很重要。'
        }
      ],
      images: [
        {
          id: 1,
          src: '/images/pingo/pingo-insights.avif',
          alt: 'Pingo 美食搜集神器架構',
          placeholder: '/images/pingo/pingo-insights.avif',
          width: 994,
          height: 330
        }
      ]
    },
    painPoints: {
      title: '痛點分析＆解決方案 / Painpoint & Solution',
      descriptions: null,
      information: [
        {
          id: 'pingo-pain-info-1',
          pain: {
            heading: '瀏覽體驗不佳',
            content: '當收藏數量龐大時，介面呈現方式不夠簡潔，降低操作精准度。'
          },
          solution: {
            heading: '地圖介面優化',
            content: '弱化次要資訊，突出重要的顯示內容，同時精簡顯示數量。'
          }
        },
        {
          id: 'pingo-pain-info-2',
          pain: {
            heading: '搜尋功能不完善',
            content: '搜尋不精準，導致需要花費大量時間檢視不相關的結果。'
          },
          solution: {
            heading: '進階搜尋功能',
            content: '區分美食、景點搜尋，增加地區篩選，方便針對特定範圍搜索。'
          }
        },
        {
          id: 'pingo-pain-info-3',
          pain: {
            heading: '收藏分類單ㄧ',
            content: '收藏分類固定，使用者無法根據自己的習慣和需求管理內容。'
          },
          solution: {
            heading: '增加個人化分類',
            content: '用戶可根據個人偏好創建專屬的個人分類，更容易找到項目。'
          }
        },
        {
          id: 'pingo-pain-info-4',
          pain: {
            heading: '互動方式不直覺',
            content: '店家詳情頁的資訊有些可點擊有些不能，容易使用戶覺得困惑。'
          },
          solution: {
            heading: '強化資訊層級',
            content: '針對重要操作（如導航、社群連結等）設計明確的視覺提示。'
          }
        }
      ]
    },
    sitemap: {
      title: '功能架構 / Information Architecture',
      descriptions: null,
      indicators: [
        {
          id: 1,
          labelText: '獨立頁面',
          labelType: {
            type: 'filled',
            size: 'normal',
            color: 'gray-01'
          }
        },
        {
          id: 2,
          labelText: '頁面資訊',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'primary-02'
          }
        },
        {
          id: 3,
          labelText: '優化範圍',
          labelType: {
            type: 'filled',
            size: 'small',
            color: 'secondary-02'
          }
        }
      ],
      images: [
        {
          id: 'pingo-sitemap-img-1',
          src: '/images/pingo/pingo-sitemap.avif',
          alt: 'Pingo 美食搜集神器架構',
          placeholder: '/images/pingo/pingo-sitemap.avif',
          width: 496,
          height: 594
        }
      ]
    },
    flowChart: {
      title: '流程優化 / Flow Chart',
      descriptions: [
        {
          id: 'pingo-flowChart-des-1',
          label: '搜尋流程優化',
          content:
            '在用戶研究的過程中，我們發現<span class="text-secondary-02">「快速查找過去已收藏的項目」</span>是用戶的核心需求之一。因此將設計重點放在優化該需求的流程與體驗上，確保用戶能以直觀且高效的方式搜尋和管理其收藏內容，從而提升整體使用的便利性與滿意度。'
        }
      ],
      indicator: {
        src: '/images/pingo/pingo-flow-indicator.avif',
        alt: 'Pingo 流程圖圖示',
        placeholder: '/images/pingo/pingo-flow-indicator.avif',
        width: 482,
        height: 171
      },
      information: [
        {
          id: 'pingo-flowChart-info-1',
          heading: '搜尋、篩選流程',
          images: [
            {
              id: 'flowChart-img-1',
              src: '/images/pingo/pingo-flow-search.avif',
              alt: 'Pingo 美食搜集神器易用性測試圖',
              placeholder: '/images/pingo/pingo-flow-search.avif',
              width: 1000,
              height: 329
            }
          ]
        },
        {
          id: 'pingo-flowChart-info-2',
          heading: '新增建立收藏分類流程',
          images: [
            {
              id: 'flowChart-img-2',
              src: '/images/pingo/pingo-flow-collection.avif',
              alt: 'Pingo 美食搜集神器易用性測試圖',
              placeholder: '/images/pingo/pingo-flow-collection.avif',
              width: 1000,
              height: 209
            }
          ]
        }
      ]
    },
    usability: {
      title: '易用性測試 /  Usability Test',
      descriptions: [
        {
          id: 'pingo-usability-des-1',
          label: '原型測試',
          content:
            '為了確保設計具備良好的易用性，讓使用者能夠直覺操作並清楚獲取資訊。我製作了可點擊的高保真原型，以進行易用性測試。並邀請了5位友人參與測試，<span class="text-secondary-02">透過實際操作檢驗介面是否易於理解、功能是否直觀等，作為優化依據。</span>'
        }
      ],
      images: [
        {
          id: 'pingo-usability-img-1',
          src: '/images/pingo/pingo-usability.avif',
          alt: 'Pingo 美食搜集神器易用性測試圖',
          placeholder: '/images/pingo/pingo-usability.avif',
          width: 994,
          height: 330
        }
      ]
    },
    feedback: {
      title: '使用反饋 /  Feedback',
      descriptions: [
        {
          id: 'pingo-feedback-des-1',
          label: '原型測試',
          content:
            '從易用性測試的結果來看，有3位受測者反饋了一樣的問題，<span class="text-secondary-02">發現在介面呈現上忽略了細節，導致影響整體流暢度與體驗</span>，因此針對以下反饋進行了二次優化。'
        }
      ],
      images: [
        {
          id: 'pingo-feedback-img-1',
          src: '/images/pingo/pingo-feedback.avif',
          alt: 'Pingo 美食搜集神器易用性測試圖',
          placeholder: '/images/pingo/pingo-feedback.avif',
          width: 864,
          height: 414
        }
      ]
    },
    guideline: {
      title: '設計規範 / Design Guideline',
      images: [
        {
          id: 'pingo-guideline-img-1',
          src: '/images/pingo/pingo-guideline.avif',
          alt: 'Pingo 美食搜集神器易用性測試圖',
          placeholder: '/images/pingo/pingo-guideline.avif',
          width: 980,
          height: 429
        }
      ]
    },
    uiDesign: {
      title: '成果展示 / UI Design',
      information: [
        {
          id: 'pingo-uiDesign-info-1',
          heading: '<span class="text-secondary-02">01</span> 地圖介面優化',
          subheading: '減少視覺負擔＆凸顯重要資訊',
          hasBgColor: true,
          images: [
            {
              id: 'uiDesign-img-1',
              src: '/images/pingo/pingo-ui-1.avif',
              alt: 'Pingo 地圖介面優化',
              placeholder: '/images/pingo/pingo-ui-1.avif',
              width: 1122,
              height: 599
            }
          ]
        },
        {
          id: 'uiDesign-info-2',
          heading: '<span class="text-secondary-02">02</span> 進階搜尋功能',
          subheading: '增加景點搜尋及地區篩選',
          hasBgColor: false,
          images: [
            {
              id: 'uiDesign-img-2',
              src: '/images/pingo/pingo-ui-2.avif',
              alt: 'Pingo 地圖介面優化',
              placeholder: '/images/pingo/pingo-ui-2.avif',
              width: 1122,
              height: 736
            }
          ]
        },
        {
          id: 'uiDesign-info-3',
          heading: '<span class="text-secondary-02">03</span> 增加個人化分類',
          subheading: '依據個人偏好、習慣創建專屬分類',
          hasBgColor: true,
          images: [
            {
              id: 'uiDesign-img-3',
              src: '/images/pingo/pingo-ui-3.avif',
              alt: 'Pingo 地圖介面優化',
              placeholder: '/images/pingo/pingo-ui-3.avif',
              width: 1070,
              height: 585
            }
          ]
        },
        {
          id: 'uiDesign-info-4',
          heading: null,
          subheading: '分類內頁',
          hasBgColor: true,
          images: [
            {
              id: 'uiDesign-img-4',
              src: '/images/pingo/pingo-ui-4.avif',
              alt: 'Pingo 地圖介面優化',
              placeholder: '/images/pingo/pingo-ui-4.avif',
              width: 600,
              height: 461
            }
          ]
        },
        {
          id: 'uiDesign-info-5',
          heading: null,
          subheading: '建立收藏分類流程',
          hasBgColor: true,
          images: [
            {
              id: 'uiDesign-img-5',
              src: '/images/pingo/pingo-ui-5.avif',
              alt: 'Pingo 地圖介面優化',
              placeholder: '/images/pingo/pingo-ui-5.avif',
              width: 968,
              height: 555
            }
          ]
        },
        {
          id: 'uiDesign-info-6',
          heading: '<span class="text-secondary-02">04</span> 強化資訊層級',
          subheading: '明確的設計提示引導操作',
          hasBgColor: false,
          images: [
            {
              id: 'uiDesign-img-6',
              src: '/images/pingo/pingo-ui-6.avif',
              alt: 'Pingo 地圖介面優化',
              placeholder: '/images/pingo/pingo-ui-6.avif',
              width: 1122,
              height: 598.6
            }
          ]
        }
      ]
    },
    reflection: {
      title: '學習&反思 / Reflection',
      descriptions: [
        {
          id: 'pingo-reflection-des-1',
          label: '設計動機',
          content:
            '之所以挑選Pingo做Redesign，<span class="text-secondary-02">不外乎對於美食景點的熱愛，加上我本身也是這個App的用戶。</span>起初在做用戶研究時，可以發現用戶數滿多的，很容易搜尋到用戶分享使用上的優缺點，也發現產品有許多可優化的空間！便有了優化Pingo的動機，雖然無法得知產品本身的策略及商業邏輯，沒有辦法做更深層的拆解，因此決定優化使用上的流程，以提升使用流暢度，增加用戶黏著度為目標，做發想與設計。'
        }
      ],
      reflectionList: [
        {
          id: 'pingo-reflection-info-1',
          content: '簡化不等於刪減，而是提升關鍵資訊的可見度。'
        },
        {
          id: 'pingo-reflection-info-2',
          content: '即使缺乏商業背景，優化的空間始終存在。'
        },
        {
          id: 'pingo-reflection-info-3',
          content: '持續驗證設計並優化更好的使用體驗。'
        }
      ]
    }
  },
  kai: {
    info: {
      title: 'KAI’S Gallery 凱奧畫廊',
      information: [
        {
          id: 'kai-info-1',
          label: '專案時間',
          content: '2022',
          isTagType: false
        },
        {
          id: 'kai-info-2',
          label: '負責項目',
          content: '品牌視覺規劃、Sitemap繪製、介面設計、設計規範產出。',
          isTagType: false
        },
        {
          id: 'kai-info-3',
          label: '類型項目',
          content: ['Web', 'UI'],
          isTagType: true
        },
        {
          id: 'kai-info-4',
          label: '團隊成員',
          content: '專案經理(PM) / UIUX設計師 / 前端工程師',
          isTagType: false
        },
        {
          id: 'kai-info-5',
          label: '擔任角色',
          content: 'UI/UX 設計師',
          isTagType: false
        }
      ]
    },
    about: {
      title: '關於專案 / About Project',
      descriptions: [
        {
          id: 'kai-about-info-1',
          label: '品牌介紹',
          content:
            "KAI'S Gallery 是一個致力於支持本地藝術收藏的網站，並聚集了眾多來自世界各地的優質藝術創作家與作品，希望透過網站平台聚集更多來自世界各地的優質藝術創作者及作品，宣傳品牌精神同時提供用戶更多藝術相關資訊。 "
        },
        {
          id: 'kai-about-info-2',
          label: '專案目標',
          content:
            '突出品牌調性&理念、提升導覽體驗，增設會員註冊功能及購物流程，全站搜尋以及多語系設定。'
        }
      ]
    },
    process: {
      title: '專案流程 / Project Process',
      description: null,
      images: [
        {
          src: '/images/kai/kai-process.avif',
          alt: '凱奧專案流程',
          placeholder: '/images/kai/kai-process.avif',
          width: 1122,
          height: 345
        }
      ]
    },
    sitemap: {
      title: '網站架構 / Sitemap',
      description: null,
      indicators: [
        {
          id: 1,
          labelText: '獨立頁面',
          labelType: {
            type: 'filled',
            size: 'normal',
            color: 'primary-02'
          }
        },
        {
          id: 2,
          labelText: '分類Tab',
          labelType: {
            type: 'filled',
            size: 'normal',
            color: 'gray-01'
          }
        },
        {
          id: 3,
          labelText: '頁面資訊',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'primary-02'
          }
        },
        {
          id: 4,
          labelText: '內容/功能',
          labelType: {
            type: 'filled',
            size: 'small',
            color: 'primary-02'
          }
        }
      ],
      images: [
        {
          src: '/images/kai/kai-sitemap.avif',
          alt: '凱奧網站架構',
          placeholder: '/images/kai/kai-sitemap.avif',
          width: 674,
          height: 974
        }
      ]
    },
    demoVideo: {
      videoSrc: '/videos/kai-demo.mp4',
      videoLabel: '凱奧畫廊網站展示'
    },
    demo: {
      pictures: [
        {
          src: '/images/kai/kai-demo1.svg',
          alt: '凱奧網站展示',
          placeholder: '/images/kai/kai-demo1.svg',
          width: 1440,
          height: 1199,
          isFullSize: true
        },
        {
          src: '/images/kai/kai-demo2.svg',
          alt: '凱奧網站展示',
          placeholder: '/images/kai/kai-demo2.svg',
          width: 800,
          height: 500,
          isFullSize: false
        },
        {
          src: '/images/kai/kai-demo3.svg',
          alt: '凱奧網站展示',
          placeholder: '/images/kai/kai-demo3.svg',
          width: 1440,
          height: 1408,
          isFullSize: true
        }
      ]
    }
  },
  mandala: {
    info: {
      title: 'Mandala 炘睿生醫',
      information: [
        {
          id: 'mandala-info-1',
          label: '專案時間',
          content: '2021',
          isTagType: false
        },
        {
          id: 'mandala-info-2',
          label: '負責項目',
          content: '品牌視覺規劃、Sitemap繪製、介面設計、設計規範產出。',
          isTagType: false
        },
        {
          id: 'mandala-info-3',
          label: '類型項目',
          content: ['Web', 'UI'],
          isTagType: true
        },
        {
          id: 'mandala-info-4',
          label: '團隊成員',
          content: '專案經理(PM) / UIUX設計師 / 前端工程師',
          isTagType: false
        },
        {
          id: 'mandala-info-5',
          label: '擔任角色',
          content: 'UI/UX 設計師',
          isTagType: false
        }
      ]
    },
    about: {
      title: '關於專案 / About Project',
      descriptions: [
        {
          id: 'mandala-about-info-1',
          label: '品牌介紹',
          content:
            'Mandala-炘睿生醫是細胞醫學服務公司。專注細胞及延伸產品的發展，並致力於加快細胞醫學走進人們生活的速度，創造具社交性的個人化醫學服務體驗，協助成功的事業家們領先衰老、慢性疾病和癌症一步，不受阻礙的與家人享受生活，與夥伴們持續成就不凡。'
        },
        {
          id: 'mandala-about-info-2',
          label: '專案目標',
          content:
            '根據品牌形象理念等，<span class="text-secondary-01">規劃網站架構，著重資訊呈現，引導使用者快速了解</span>品牌內容及服務項目。'
        }
      ]
    },
    process: {
      title: '專案流程 / Project Process',
      information: [
        {
          stepName: '需求彙整',
          category: 'Summary',
          description: '彙整客戶需求、功能'
        },
        {
          stepName: '架構規劃',
          category: 'Sitemap',
          description: '產出初步資訊架構'
        },
        {
          stepName: '品牌視覺',
          category: 'Visual',
          description: '突出品牌調性&風格'
        },
        {
          stepName: '介面設計',
          category: 'UI/UX',
          description: '強調品牌資訊、服務&風格'
        },
        {
          stepName: '交付開發',
          category: 'Develop',
          description: '交付設計文件、測試'
        }
      ]
    },
    sitemap: {
      title: '網站架構 / Sitemap',
      descriptions: [
        {
          id: 'mandala-sitemap-des-1',
          label: null,
          content: '根據業主需求，產出sitemap協助PM核對並預估開發時間。'
        }
      ],
      indicators: [
        {
          id: 1,
          labelText: '主頁',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'secondary-01'
          }
        },
        {
          id: 2,
          labelText: '獨立頁面',
          labelType: {
            type: 'filled',
            size: 'normal',
            color: 'secondary-01'
          }
        },
        {
          id: 3,
          labelText: '分類Tab',
          labelType: {
            type: 'unfilled',
            size: 'normal',
            color: 'primary-02'
          }
        }
      ],
      images: [
        {
          src: '/images/mandala/mandala-sitemap.svg',
          alt: '炘睿網站架構',
          placeholder: '/images/mandala/mandala-sitemap.svg',
          width: 456,
          height: 369
        }
      ]
    },
    demoVideo: {
      videoSrc: '/videos/mandala-demo.mp4',
      videoLabel: '炘睿生醫網站展示'
    },
    demonstrations: {
      images: [
        {
          id: 1,
          src: '/images/mandala/mandala-demo-1.jpg',
          alt: '',
          placeholder: '/images/mandala/mandala-demo-1.jpg',
          width: 895,
          height: 1466,
          other: {
            isFullSize: false,
            bgColorStyle: 'bg-primary-02',
            widthStyle: 'w-[79.6%]'
          }
        },
        {
          id: 2,
          src: '/images/mandala/mandala-demo-2.avif',
          alt: '',
          placeholder: '/images/mandala/mandala-demo-2.avif',
          width: 1008,
          height: 1701,
          other: {
            isFullSize: false,
            bgColorStyle: null,
            widthStyle: 'w-[89.8%]'
          }
        },
        {
          id: 3,
          src: '/images/mandala/mandala-demo-3.png',
          alt: '',
          placeholder: '/images/mandala/mandala-demo-3.png',
          width: 894,
          height: 559,
          other: {
            isFullSize: false,
            bgColorStyle: 'bg-gray-04',
            widthStyle: 'w-[79.6%]'
          }
        },
        {
          id: 4,
          src: '/images/mandala/mandala-demo-4.png',
          alt: '',
          placeholder: '/images/mandala/mandala-demo-4.png',
          width: 894,
          height: 1491,
          other: {
            isFullSize: false,
            bgColorStyle: null,
            widthStyle: 'w-[79.6%]'
          }
        }
      ]
    }
  }
}
