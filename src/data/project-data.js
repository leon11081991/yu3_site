import KolProcessImg from '@/assets/images/kol/kol-process.svg'

import PingoSitemapImg from '@/assets/images/pingo/pingo-sitemap.svg'
import PingoUser1Img from '@/assets/images/pingo/user1.svg'
import PingoUser2Img from '@/assets/images/pingo/user2.svg'
import PingoUser3Img from '@/assets/images/pingo/user3.svg'
import PingoUser4Img from '@/assets/images/pingo/user4.svg'

import KaiProcessImg from '@/assets/images/kai/kai-process.svg'
import KaiSitemapImg from '@/assets/images/kai/kai-sitemap.svg'
import KaiDemoVideo from '@/assets/videos/kai-demo.mp4'
import KaiDemo1Img from '@/assets/images/kai/kai-demo1.svg'
import KaiDemo2Img from '@/assets/images/kai/kai-demo2.svg'
import KaiDemo3Img from '@/assets/images/kai/kai-demo3.svg'

import MandalaSitemapImg from '@assets/images/mandala/mandala-sitemap.svg'
import MandalaDemoVideo from '@assets/videos/mandala-demo.mp4'
import MandalaDemo1Img from '@assets/images/mandala/mandala-demo-1.jpg'
import MandalaDemo2Img from '@assets/images/mandala/mandala-demo-2.png'
import MandalaDemo3Img from '@assets/images/mandala/mandala-demo-3.png'
import MandalaDemo4Img from '@assets/images/mandala/mandala-demo-4.png'

export const PROJECT_DATA = {
  kol: {
    info: {
      title: 'KOL Master 網紅媒合平台',
      information: [
        {
          label: '專案時間',
          content: '2020'
        },
        {
          label: '負責項目',
          content: '競品分析、用戶訪談、UX研究、UX設計、UI介面設計、Design Guideline產出。'
        },
        {
          label: '類型項目',
          content: 'B2B Saas'
        },
        {
          label: '團隊成員',
          content: 'Lillian Lin (Yu.3_)'
        },
        {
          label: '擔任角色',
          content: 'UI/UX Designer'
        }
      ]
    },
    about: {
      title: '關於專案 / About Project',
      information: [
        {
          label: '專案背景',
          content:
            '在這資訊爆炸的時代，<span class="text-secondary-03">KOL已成為數位行銷的最佳推手，也就是「網紅行銷」</span>。由於越來越多品牌有網紅行銷的需求，為了替廣告主創造個性化服務、使網紅商業合作更加迅速流暢，因此有了網紅媒合平台的誕生。'
        },
        {
          label: '產品目標',
          content:
            '打造一個數據驅動、高效匹配、簡單易用的KOL行銷平台，讓廣告主能夠輕鬆找到適合的KOL，並透過產品提升行銷成效，降低試錯成本。（成為廣告主與KOL中間的協調者，起到媒合、協調的作用，進行雙向媒合的商業行為。)'
        },
        {
          label: '設計的挑戰',
          content:
            '目前市場上已經有許多KOL平台，如KOL Radar、Influencer圈圈科技、台灣KOL等，<span class="text-secondary-03">如何做出差異化？並且從現有的市場找出可切入的機會點？一人設計師如何產出0到1的產品？</span>'
        }
      ]
    },
    process: {
      title: '專案流程 / Project Process',
      image: {
        src: KolProcessImg,
        alt: 'KOL Master 專案流程',
        placeholder: KolProcessImg,
        width: 1122,
        height: 440
      }
    }
  },
  pingo: {
    info: {
      title: 'Pingo 美食搜集神器',
      information: [
        {
          label: '專案時間',
          content: '2020'
        },
        {
          label: '負責項目',
          content: 'UX Research、UI介面調整、搜尋流程優化'
        },
        {
          label: '類型項目',
          content: 'APP Redesign'
        },
        {
          label: '團隊成員',
          content: 'Lillian Lin (Yu.3_)'
        },
        {
          label: '擔任角色',
          content: 'UI/UX Designer'
        }
      ]
    },
    about: {
      title: '關於專案 / About Project',
      information: [
        {
          label: '產品介紹',
          content:
            'Pingo是ㄧ款專為Instagram愛好者打造的口袋清單App，<span class="text-secondary-02">幫助使用者將收藏的景點、美食匯集成清單</span>，並將其分類，以及相關的店家資訊，大量減少了使用者搜尋景點及美食的時間，也因此受到大量使用者的喜愛。'
        },
        {
          label: '期望目標',
          content:
            '這一次Redesign的重點希望可以<span class="text-secondary-02">優化現階段的使用流程＆產品體驗</span>，讓使用者在操作上更直覺並符合使用者的需求，提升用戶的黏著度與滿意度。'
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
          id: 1,
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
          userImage: PingoUser1Img
        },
        {
          id: 2,
          title: '搜尋結果大雜燴',
          content:
            '有時候只想找美食或景點，但搜尋結果會把美食與景點都混在其中，難以找到想要的內容。',
          userImage: PingoUser2Img
        },
        {
          id: 3,
          title: '收藏分類單一',
          content:
            '目前產品的收藏頁面僅提供「美食」與「景點」兩種分類，分類方式過於單一，無法根據個人喜好分類。',
          userImage: PingoUser3Img
        },
        {
          id: 4,
          title: '互動體驗不佳',
          content:
            '店家詳情頁中的資訊呈現方式不夠明確，部分資訊可以點擊進一步操作或查看，但部分則無法點擊。',
          userImage: PingoUser4Img
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
      ]
    },
    sitemap: {
      title: '功能架構 / Information Architecture',
      description: null,
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
      picture: {
        src: PingoSitemapImg,
        alt: 'Pingo 美食搜集神器架構',
        placeholder: PingoSitemapImg,
        width: 496,
        height: 594
      }
    }
  },
  kai: {
    info: {
      title: 'KAI’S Gallery 凱奧畫廊',
      information: [
        {
          label: '專案時間',
          content: '2022'
        },
        {
          label: '負責項目',
          content: 'Sitemap繪製、品牌視覺規劃、UI Design、Design Guideline 產出。'
        },
        {
          label: '類型項目',
          content: 'Online Store Ｗeb Design'
        },
        {
          label: '團隊成員',
          content: 'Lillian Lin (Yu.3_) / Leon Chou / Ya Ching Kao'
        },
        {
          label: '擔任角色',
          content: 'UI/UX Designer'
        }
      ]
    },
    about: {
      title: '關於專案 / About Project',
      information: [
        {
          label: '品牌介紹',
          content:
            "KAI'S Gallery 是一個致力於支持本地藝術收藏的網站，並聚集了眾多來自世界各地的優質藝術創作家與作品，希望透過網站平台聚集更多來自世界各地的優質藝術創作者及作品，宣傳品牌精神同時提供用戶更多藝術相關資訊。 "
        },
        {
          label: '專案目標',
          content:
            '突出品牌調性&理念、提升導覽體驗，增設會員註冊功能及購物流程，全站搜尋以及多語系設定。'
        }
      ]
    },
    process: {
      title: '專案流程 / Project Process',
      image: {
        src: KaiProcessImg,
        alt: '凱奧專案流程',
        placeholder: KaiProcessImg,
        width: 1122,
        height: 345
      }
    },
    sitemap: {
      title: '網站架構 / Sitemap',
      description: '',
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
      picture: {
        src: KaiSitemapImg,
        alt: '凱奧網站架構',
        placeholder: KaiSitemapImg,
        width: 675,
        height: 974
      }
    },
    demoVideo: {
      videoSrc: KaiDemoVideo,
      videoLabel: '凱奧畫廊網站展示'
    },
    demo: {
      pictures: [
        {
          src: KaiDemo1Img,
          alt: '凱奧網站展示',
          placeholder: KaiDemo1Img,
          width: 1440,
          height: 1199,
          isFullSize: true
        },
        {
          src: KaiDemo2Img,
          alt: '凱奧網站展示',
          placeholder: KaiDemo2Img,
          width: 800,
          height: 500,
          isFullSize: false
        },
        {
          src: KaiDemo3Img,
          alt: '凱奧網站展示',
          placeholder: KaiDemo3Img,
          width: 1440,
          height: 1408,
          isFullSize: true
        }
      ]
    }
  },
  mandala: {
    info: {
      title: 'Mandala 新睿生醫',
      information: [
        {
          label: '專案時間',
          content: '2021'
        },
        {
          label: '負責項目',
          content: 'Sitemap繪製、品牌視覺規劃、UI Design、Design Guideline 產出。'
        },
        {
          label: '類型項目',
          content: 'Branding Web Design'
        },
        {
          label: '團隊成員',
          content: 'Lillian Lin (Yu.3_) / Leon Chou / Ya Ching Kao'
        },
        {
          label: '擔任角色',
          content: 'UI/UX Designer'
        }
      ]
    },
    about: {
      title: '關於專案 / About Project',
      information: [
        {
          label: '品牌介紹',
          content:
            'Mandala-炘睿生醫是細胞醫學服務公司。專注細胞及延伸產品的發展，並致力於加快細胞醫學走進人們生活的速度，創造具社交性的個人化醫學服務體驗，協助成功的事業家們領先衰老、慢性疾病和癌症一步，不受阻礙的與家人享受生活，與夥伴們持續成就不凡。'
        },
        {
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
      description: '根據業主需求，產出sitemap協助PM核對並預估開發時間。',
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
      picture: {
        src: MandalaSitemapImg,
        alt: '新睿網站架構',
        placeholder: MandalaSitemapImg,
        width: 456,
        height: 369
      }
    },
    demoVideo: {
      videoSrc: MandalaDemoVideo,
      videoLabel: '新睿生醫網站展示'
    },
    demonstrations: {
      images: [
        {
          id: 1,
          src: MandalaDemo1Img,
          alt: '',
          placeholder: MandalaDemo1Img,
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
          src: MandalaDemo2Img,
          alt: '',
          placeholder: MandalaDemo2Img,
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
          src: MandalaDemo3Img,
          alt: '',
          placeholder: MandalaDemo3Img,
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
          src: MandalaDemo4Img,
          alt: '',
          placeholder: MandalaDemo4Img,
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
