import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

function ImageSlider() {
  const images = [
    {
      id: 0,
      img: <img src="https://drive.google.com/file/d/1uQqBeYxo7FSMUZk5QUGXPifNSCnny0WY/" />,
    },
    {
      id: 1,
      img: (
        <img src="https://lh3.googleusercontent.com/xISbrh4m1e3o49UQqe96jxXvmvgGxLNd5t-5LuN4XM42Zjr5-jkgASpn20_Va-21D3P9vGeWJ32dyfJQl5J4FwQJ67Zn2O_ChvABiJ4H01UIKR7SKNB_PsFRVUTDNGELhKYEqCMdkPa78OtLQ_dzhZZ3gB6uhVb32Io6QZVlPKCZBBkVN5KIHqodA77WXfhm_nmoamT_WK7IcUFcuqhmQaHdyK1Of4vMDFJQusBJg1suso-Aqz8IQkxJ5DMMAY7Qw-mD28ZF-YawJ2BvhSiI_prhp-3Nw6TfNLFheqvIDU01W3E0l_omJkJdmymlC_gMzfXDyh2X7w0YbKehdraCW_6AMH6_2cQUZ_vEoaAr6yltsLg8p2JgIJkB9Bss_1NTpUmsB1Q716OKfOQ1bWV9ZDs_cEouQ7_nJTJDfbCnTwc3VvqHyVISGmCxkgDYWPycT3bWwimuYhjJac3PDnfMjin936-GfTBBTZjuSCBZwAPdWZnDN7FxAcy629twtkD-r0nKR1ZmMds8wXLloh0KtfpBk0-NU7UQbU4wAdvDXt_etjqnzqtSExcJ_vHOtadsOKmRdSVM6sQ4e-90m5nq3RWyJClUdHNgqy-gOYJUZ0Sd1TkreKAjg_Iaom5BySyj6wrrPOY73mYlnXTFav1LL69h3P_VnuEv0pG8lW1dkEK8hBADPYjlftbWN29wdW4mniNd2PZltnAo3CwozIBXA6kKWHoLaFjozVtXyi1lNPl8CEFU4Qqlt2eVYnW1RjiQB_3RyLQSERxeA3Gr6KE_Yr13yKHqN_2Ayf6jvJdi4MpQbqVD7UJDzuvQ5bgE_UITGb2p1zKD7GTewv-4YuAZChR6QgfJvUzlJ5ON5_KJKgtCgyXFsskvRpNvHwgKxnXD0uqhMxkD9UWGhj07GMIj1pAVUlrYfw-MDdYHH1tmpjFjgW8cgWSOmo3RH0w44l8T4wtCv46Phj9QgL6tfXFCRIm6Gqd1pvZ-ofxjqIpMPGjaWVx3erC6IdAe=w524-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 2,
      img: (
        <img src="https://lh3.googleusercontent.com/7X5vkqx3u4HDSXqXcCZRr1IYX4JA3sYjnakOHIxNtYmXfJnfSXLa4h3SdlyYVQQ7cXuW767YJ2zUtNLBtFmO3H1iJFBgY9ajC3UxMQaF4AKw4mA4wNswpEIMaRTKynwLmkoqAIeExsI6x3qCbhGD_INaFpw9YBs1IBpYMwnQoMJowYIwITmRemv8Bg-sIqxoGpYdZCikF4tPaBGKKGfCNuDM6ZvxGp0FU_xF0GF0dwr0fOt3pXatfp6soZjSSZFlr_RT7aEAKl2Wq-v6R0Va0zgAjuC24QzgX5h7aBBK7nAXa3LA3wHtulPRaBZs6ujrHJ7LGUPgCOMfIEoDjqdAX15bmQWhpdo9AGxQFX0mYlElV43qYd0zvBT_FnY0LqVI9R2TlICff709j3cRBd-1_ELmVPRkslNilP5F_PwLl6C_uwY7AoAGr5JrxIUhJc2gVF3lLWnq--YHuVj4Mc1DAv2OYzFxDwEwAq47I0rFS6SYlWmN7z4BS-wizCFFK5NYF-CNrFldPvXCZOeOU1jf5koqeRGoKblbCvKfKtQbUWWccYgtM1DwW09TWGKupQoRAPJzLFyPhcxTB9gQrEHX-yAUxvHQLtY0dqR9IO2zgOL4ozNRRt_u_yMWr73N6zxYaAKDg9SroIISsmW_gD3fK5QOlarHQKaX4KyHK2DHfL0Tk94Jzz7VmL8UwYvS0otNW62grSjvApq1PLVUPacZ4DApH5a3WYv-vSexwSBsQqV23eFdktdULNao993SRx7TzwpCV5mrb35LYGmpCx1-9-1SWUDHR_eSVMBk97yyH6Vpcup4mYNARDtRnQ8fOVohooFcG5JPIrHuVwa-hR2X-LaBRJPp9zoFxN6Z99WeBoRaPxd_IhGDhOur1hNWakby_c750gElFBmBV8LWZ7_eDJmdfQA7AANaZqYn_iQdBdkWOPHsq_azRpKcNW5JvZ0QyCgFT9pLd9U4XwHPD-DApRN-FwrWobmHIxXKgo6ox-fYkxyCBiQ_HonT=w469-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 3,
      img: (
        <img src="https://lh3.googleusercontent.com/LmF76moBZHJ9v75pETtduKL5Gu4iu8QcilqWpGRz5wNmocMr7pzVUr1ALLnpgxW83GF9rd1jVlpX4dvWav5875EJ6a9rHbJ-DsYfN-8FTSg-vaaUbqLQABZckBPeXuW-oL7AkdID7ffebx5mQ9iGVcE00aGpW7fLMxhvmD-npO7qQCH519bmKlOlXAZa9Vy8sATigf9qpMsthjSvK4Wh5xXvW8TXcitLsTX-OKuxX3j4v-jLECn2K0oFcqHo9SJ_ZyAQFVMrO6SCFPn2xtn7-myMxu5SOiDQdiZtKowJapgSa2B3K21I6zIgqQZygvWRQIAcLSz6FogCuXUaAesHAuwrZxOHHM1Ws2JLuMkYCs7PcIXpbQJKV_SUjrrxxoH6lViJ8irHekGujFNG4m5LqC_WcdEqrl4VWR-EVTvntTEBw7XeKmPB4h_NxvSasMpKEIyTeFsuIdd_ti5mj1YeBUoFQ4yFhEYpfN2s7pD9XOa9-Xll91lTrbiNhR_oCr6xdq0jMezZxas7caQ0bJ9-YNeSFKMZPYfLfaFJDByig1GwLaNYpUGkQgriZXKESD1_piAo9hC2YAcp4wVKrru7x5XA6tHL4pBmC68_75Oz3tKyN-euuZJIqj5bJrkX1Ea3siVTXDIGMFRleuEL8KbnoHmtbEhFjsn1nCFuSHvVAlAd9fCT2HBy-mUn1aPLRRAC_KReg1YoFk9T167bAHGHCg4GoD-pVeFoW5dr-ZOG_zG13gALeFn7KPPxW9M5yF-rsrOGI0eikkk-WuSB3IZL23eelKLRUETibyE8U7nf_3YI5Ith4Y735r84iVmYbfjvlZev2OXuSPnMwiZJEQk6gz41Qxh0mZbM4O2t-TNjHcKT_pmR5blvEfD8hfftaT7Wu6XRaw8ZtfVYST1kYgLJ5-CSnUpMKUxBM3NOJSDcDP5sqai-e3aj7G9ZX8qI-N-rDh4s4TgYi0pjShd0uwsXnMIA4_D_MlbTXWsdiQvaolttFT_TBik6WkpK=w417-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 4,
      img: (
        <img src="https://lh3.googleusercontent.com/53-qemJufBT8xyOf7sNGIo_L1GauJPImRaZaGDUip2gOhhlpyodvyEDiEMIuwwhmtfnnvojxaPMZ_eupLPEmJj23wrYE4TMCjEjOOxc8INPj25Wy29yZbBDfc4oz14f3ed-ptO2gf8YiG3x1ck454mgyOYxPGKDbiMEtQoGuzt011_Ii1KDZgqY3K0grXqIBgGvHflXqumyRHDKn6CJ-_7yPrXjPb9m3UNyVRujGP6pXK2n66343C8AnHkKpmIJ_fqyrVBNP5ScsbOyf8Xb7p7jR6hR2pU3r-wlkfDaMBFFygi4TZxuURkj-mza8t1c0WvOTgBLYYKPcUwYP2VnVdN40FG7RP7Scq4ULEyQZGUbduNdQIbne2zS-OUiQ7J0UGRwnISnoCPqr167HX10_ZY1WDyOjraOKcGXwkJ57_qyd4OXFgluoqKNIPJsrsamEmO60bV1pwAtIpcbKbwNTdbtELV2qbvVSusrHu8MhyiLey5-dBs1A7guXJz2h4yO-Lcn_IQtG2LuKpcSGPOHg7jZ6T9uoqTc86qfu4oGpSdnMDH5IlKqdCnMbTFRdU68UQHDH1yFOI65iDjk3hR0STHH2vs4-67gqB_rDLg1wjni-i9msMV4GUcGW5bmFyk_NNTXuTWnkbevyzq0GSL42EXMAxZ4I3Gl4qbScV042R0kr_nOuYiKKNSSeLY6Uz0gVIliP7yaxuWqau6bMCFL-9uSIeIq5ofKIJUob5L96XTGRz8q1YSUB_dgXJLtcn898eyIlYRPv8yjypTggpR7oN774tgFGpdZKq50cHWtCTou68THgtVutE5XJQ1UOr2tYD4hSZNsc1WXdtQgrBsdbSpGgiRZKRASvht38hUFrMbD3b5APdsxS67764pN5HRyz0wuP2AAt6n_40aZO11a9-ypYqXVzK2np_fkuSPLwfIeWUv_du9ed_y421sjVGOPEaFqXHQeHYkvquRPiZL4zGZ16xiK_IlcP1QnY2QiNWQvTzNd-cyFxRVk5=w625-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 5,
      img: (
        <img src="https://lh3.googleusercontent.com/5v2Ul_qTAiLpOjx6AkWMFTDTDuNi1Y4HEFPPlu8hUDJsoEJVqM-WvBd1nkeLAJTPJklDJsDbd06EqlxS9AesaT5B2y6Jjrw64Acv3GJGr_juwLIZKTkr13yBo04PwX8kqOTO7zxeGpoD4kYOmsXDnk3QQ_gmwmMNbXfQ_YtmajXnR3RIdX8qxIWJkJ1CXVYoC0DFDrKoTobdVa1u18FTqcQGE2adN8YcyW0mSTJt0AuZIqiV6o3WL78o9BMcWpvr-srLPCh2ZE3eHOoSatJLSfu_S3gnVhtA2-GAcio2F21X1Hyoo7fLyNPNaz1Og4etCVT6Xu-BMZgwOpBhRTR74stufSZIoElTl0ZSNasjTft1sgSqSKDqWzizf7qr0pKYDVWiv__XdA3HAI1NyIrZjA2d6AEmvoo_6gfdWTypf9unTF2nXTxEiX46NeYmZrWRkMxDq__FiNC3hoh4jELDWR90tFrAELumFnmdkWYyguhO2TO3GuFSaH_V704av8avGJvWnbGuv0vZa_QTe4N33c1c4SIMQvJ5eH28_2VfbzWfeoHdKH6DcSGAtmgUASp_B1XG-ny7sVtGHHdYP5byhzh_j6f-XKmeJeDc1YjIkr18sVYgg2_RSM2oeF2TId1N0HF7C1q8YxAg506NYCUZgbvccuoV87b0ZtUPlmIpZVbLdnZRUgfiVBRT-cGZ-hVUIGkf7XprGpADwgH6WjWTYrSKbqBQH1SsRxahqerlkZT5-_aZi_jEAV67wcj1s1WF-sphHT_-wKmiZTPgjzaJGK99xgg49AaUefckjpvoNXO5mHpDMpHhib5Wu5XREmPPgmsTbH4ND0aoTCRVEZnEAdAZEiL9kmMaQbchBMr1gR4E_Dj-YVQtu7PkhlfkybY0GqWANWeLsNAFg4eI02efw85zRodjVUGHoftuIV5ycpaHfEp2oCwuhvRr2PLLDTURb5vKcNVpfhTH6-iEpkWDkbG8gLwBwJLg_n-RuTfuLRPH2xbxWIN41Q3z=w887-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 6,
      img: (
        <img src="https://lh3.googleusercontent.com/V7A8JRec1tG3ZB43rCyiy5NQrl7yXeZhcjxDY_jslZCdvJ-KzObkizSlf6O9umEStGgb7OuoPIJlE4MOZNWdDR7Qo0iWsX78tHa8oRc-HGsen-SN_2qhhI9XmvSEVNO2Z2VToU4aAF7QADKJrwi9F6OgMTQb7uD93OP0hD3bAwi5gCGu16AuostQu9GXxO1pfPYg9I6G3ySqxnYNd9Pb2qg7PGxzZNrFuK3WRwr4QhC-I_xVHqk92mF31NKfrb3EhJCA1vCclCRDvy_Kj0JqLbDs53elNxO21uIMSPxpzRXcW4An3tOlT6_h13SOUpKimxT5gjLvyOwq1eu2SnUHmUX7KID1Tf_EjZZCiiu6QCsuUShTU4TUJxDTsIifYHoSziwJ_ZGXeWTVpQ9WxCywPLVRpHacT8Ay0ruZZVT46gnTw8juWSbAOuSi2rMvBV8tA-Euz1WOxLgZkDKuoNjIgoaRYhOx9hDs3rSVGjzmWGnG1gRPByyNqof9GDly1lPUVrSjU1LRsuig04eRDPXbNy9RHEBJkr2HGGCFurhIHHWAMoyze6wY7O-XiFGpMLEkWiPIIWEssGAxgAGluhUmnQbh2bPRfaT12cGY7HmnKVRVsNqQLJK74Vv9uF7jdIp0FJHK0jq8MuD1dZsuynWBaG_YxOoqBQZwkGtonLg0aYMKGZ22SderjoSzEt9AalUc0Kb_kYOXKj5C0itZkMf4GziVdP4mAd4bUeBcNpDjOqMHwkN-lafWmFglQsNWhL-jAH-r8TEjB9lye5QjrA7Jn01nnDC4Cwy0a_yI5LECjKZGLw-PX3-eqdDpa8LlMokL24JT4SkGW8LZoIhidavtXR-d11YR7BvNQJ8Oz7o8rCj9bK-1aZWYNIUj4pYH2LeP7OV2JOQaH5KQQfGQetBcD88NJEDIhhT_aBihuVMIIPlvBONC_VFcxBrS37ZQqp-xluyYaWDrwSlCaBYVnNLVm0ZJ0c_TUV-ZSa2hevvEfzBarl9xSAeKsjxP=w417-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 7,
      img: (
        <img src="https://lh3.googleusercontent.com/2qSaDyejbn3uOeuOUh-goVlQDOBiRQG8YSfb0neKSloCo1J7ifjxxci8ceUu_CD2B6e1ihqFZgTjQkYFm5S7fhhk62wdcD-IzfSC4vdwhfCKWtfsaQuUrXK5G2mkTEeTXO9d27ua2R0h6PsZ1lZKz2aRsJAKC_zpXxjDpL3T6sS_jDWNEjCDcWBMt8jSDEue4iltYvk4h5f089eTUlmfm8_qxNw2TjcJ8yEaiGFdE_PLBcPzkkyljWZhbyRCO913zqc2qL7GhZvpR8OqayWoi4tuQ33QzpAP42UvT6X0Rq1MU2SFVT17OR0-ONOWagWhMpvJW4g_c6r_LRKUvsHFknnEtIITRXF487z9ZE6XpSqxxrd-KLlhCVz-l_bG6iIbgM1AR7Lt-X3DhzvMm0P2BJJNJB1iUz9ADf5ivEsP4cmvMB8VoaVZ5cj1Rhjh8JVU6ReLENPG0y1gHbP_quvZ0YY_i_vJHNLxLuM6mKAvYwfQO0e7iKtp1kLFJcbp3Uf4Xk60pzsyiNqVuzMYbw3OXH7e8ojzhqlWh0DH1jK8BaG2k4uqMDD6rv0_6FDomm6WJVLAvts-2YN-ZFhhGu_yZU0YeXYeW3SMWsFyomdK4bM9MHo5cDZHlQpm19_84msAuWFr_FPCnLN-OcFUmiSdwGM23NvIUECfZNLSM22Goeda3R7X-xQbY15UiUnDXvl5JdKR5S7dX2SkmQ9fhq1UQZeq2p5AJSprjVUcdPxUKmZofx65k0klogCvb9zn5t8FU-bynv0Px2LLp3StVCa0aHTj-p11icO0XJv6-eDeEF3ZzrsxfbM2gA4G90UM5O0zPfItRAiHxi6sQARw1GfntgIkp2at0gsCDcyi04mRQChm5h8ML9XwYGKHxE3r_nYa7t78mbkdQbLBiemTUSIggNki0Wk4GFS3x9d2sDfHMOWgZdL0ZV5-5jicc2w4dTKDk-U8lKEJpSa98S2WI-HrkvhjhuUj8REr5fYGX4d1Vrp9QKn_gJ-ISgTA=w525-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 8,
      img: (
        <img src="https://lh3.googleusercontent.com/tOFSB7dSAfv9vtAPYJPDsQ8qMdgJxsXTszkjuRp9ohodZUMigZikRhFQ4BCONgYga3jcGIc3n9pU1m02jUhUBASP9uu98JNAmZnriAtwoLQYZVcHvW6s9u2SVmf7yhv6rdSAkV26UMx7qV9GBhXmKlp1k40AIBBt96jGfZPaPBqlbhJrrpI84o8Fcy-cUDgE7xc_46LpHH4rVy0co5KSqXt5yZ0zMf0ANThyUnUfX3uUAEhAPEZuYV7UQB8VscwYBEatxotXRueCgtAVwJmkccnrzxlgKX5i_CFtH5HmiqfaslqpGyvvbtwJeGfkrHs5TxB_ywntcnb974ARnqx5gLUBNTLHps8kc63UG4EZG19m8tkKNzHWW-gD72yeYucFz3cXl4uDjsYfr5QM7u4jpWtV-hUYbeM-n0GrHFhNXrQIq30SX-ZLrIZTPY2L_WtW-2MnkPl3lZx2jzFEoHWbIWcv7XI9TepExhXBx34aN3ahn_55if475SdTLvlkkdLlWtLY59tkPL0vMpEgF7OvN5TJtT8T7Z70-lt1DLClnetEf96UCLTsFBdto3XgF2t1L-TpVfj26LXCqvhyru03BRa_OEFDOXV_uQLpys0Svl5pEopkmd8_OqXfAsgB4I1lbwi-vSK6mcKPzs441EIC3Q_tPHQRmB23dx3a5MMXt_D0HA0Ot8lzg49_SDGNbmWCGr8KGqNtXbIH7TJ-l4Qdgl0y0JqI8jhi_Lvwtru6uVwTg6uyA_RNiB8jZsyM5nFjsU1Jg7FPwiZrYMur3Vmfc98OS_akO0seQRwTnld1MQOT1rFEtN3wyuSA7ZwQ5OsE1YH-X8vRn-Vkw9f02kKCji8bD7zDISrA5NPYVYIuTmxGZu-0d8hp6C5OH8v93jV_m6bVHwqKIDC8Z_S5OKCpF-cTw_CMQLVJRT0_ILDcaivqIqMH11FP6NhEltBXjRSb7e7Ed5gxnOUlMWZaOTuIM7urekJuUBD0UBrT6eO1nTeEWdS1Gmods7ua=w508-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 9,
      img: (
        <img src="https://lh3.googleusercontent.com/p59iAyknQpKu0do19UCrxxiiTunu_hz-7XEBzWU10Pa5oHg2N-m6GT6WhRIJj8mkUqYf57vnAgEEo5SMobqObVfdqDmbU9ORiw9z5AH5W_hmPmCgb67Qz-CCQSSqIQlsEKZf_6EGxYf-0VolfKIBbriUsGdByBQsQ5NJ44zcy100PQtd0Ts4VmyQaBpIwzWXP3ahSiBxwwVK_PUL7WyHO8UkgmEbf6xCINMM75zyZX6eZmVGA-loCuIOrVw_ZNzyiYUcyn2y-YZsTKnzyTOHiDq1IG7zj4XL7O7FkdtmBiVnQeHHVh9o5xwdGRmKhHKf7aMvtIyWz5wP0I3gojVM-bD7rQj5R7LekjV4sC8_aTG4mPAgGaw6i2ojVr7K-ki71jiyH5ztpr4ECxJYzM0E8JFFX8MwOOBHeCaYSs5mND48vSMPZrWgaKX8ZBbnNCf1ZGrx2M8xaujDrEWmHi8iSNffITWEIN4llBzJBL0AN8vHSc9GBTXVpA5wqdvZCvzmuCpqEEGiOdGnKW4mrTTDNjMsRe4wLVNrWHdrdmRZ2j8OHRJzA0waYOdHeGZcQubloERpCAmT3SNuQlEwqyF-oZsSwRcwyxYpNA23EQ-kqUUTaX5QEAr66q93lPuOEicYjlzCSTKgDSZfm35Dr_yHAEQUquNO7C3VDTd5ZyZHOU00O-UhwOkDIu6LjWLPofscPZlP4YdOy3f7uL8j1y5Wy3Z4M_-C4qEh3DbQlEuGe3bn51C8m-HwltsCJ64AAB8m6Cxtgg_HuPNXYw727Ne67ZOtknB45DbnIy60pChYdNqg0kVOHmaJB3BR4aLJ_IS-QCd9wJr6-1AI2jSWjd4Q2gBVbX9ldzBZjGd5-Bip5po8zv7wpau89nolr5wLZYsOmDSKyNqglBsHI1BSUjtzcYOT2ZxQ4GUM--1lwENXn00OpTaXNd-ifEVOwP8qd_MUmWi2U78cgdUBygcetbWb7HTCO4MAxHNdlVpEzt4aQWP1gnsf0pLqmPB_=w625-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 10,
      img: (
        <img src="https://lh3.googleusercontent.com/zmoD2wijy8XfKBtqs2imEPpzPIr8HgscZjDuRVgenHFUQedx-dnYWg_DTvEmazxiQxGOnApsEyV9KthfqHULiFp0oAkqvIIJL0sAxl3Um2-NAv-L-HbreqkQ-xp2-6E1WWQIWJcdSOKtOZhiLccZR9jA4sAvQGHi_wHKj0Bc_4xTzCSFB9H-PV0VJ-dg0dJP9MdozNZRDTUeYp2r6QFYnKdtCb7wFEqZZS2vDdSwhp1sw8mNZdHbntFQIMKjwJU79__PoYbjVv6QtM-5WJ6DSXL4wMu-u9MfyRN-ncRDV0mLAMPS1C5Q85yEuPe0VimXBCN1T6W_Ylz_W00PDwNfQ2G5GW3Nxp55ne-nPfg3GlPBCXqU11hdn6XICfE7biib4jTodYYVCmLJotJJIO7o2Hswsf8Bn7AyPBdq2_PeGEauNvRJI2lYZ88OOQuSxogqe2gHWdhbpLEc6sV9-kxwYGmLNcJgUUaj9gQSiwPr6pIkZU1OBgsw4ae6YM54SkiffUdM5bYo9sGcWpAuwBUMkW-ygWbBP8QpMS5-CPniBv4ifalbmHYtF7ddMgsbtiErrHDDubnnOkxBwh2LY6PNmB4gr_IbvREIWZd-RgQvSQMvxrs0Eo9WHgC4sx6q-NYQLYzWd309zFJLu-sFHoazzNP9burfTMRhv5XuJnreKdA-F5Rm-qbRU01u-4Ti1xnddFJl9QTOL-eVwX6dsXDRv1kV9b4jKxxcl4CTe6scuEXjBLgU3n5ajTseTP1BiirTvyQzvPpCE38uBWKGG8MP-3_NLPzT-wUSo5O9ZvIPoALe1UkZNCt_VfHbZDYuxyDtqA_Q4PD3DOfuEJlAqv1be5cAPAYYVD9T4On8fWRLF7mGoH6QWwc7RLRW4wSI6vHe_ZN9cu4vpKbDgruyl8-WllDcwDg7_rlWvCFs-ssVHZ9voL_NV-7ccPdzuXuftjvFMSWW0_ZSvp8AK_1E6myedds5zNfwL4cC2I6d28l-whonXm8azdxOTQSz=w938-h625-s-no?authuser=0" />
      ),
    },
    {
      id: 11,
      img: (
        <img src="https://lh3.googleusercontent.com/HjAmBVnCFBI7Ax8RUcL33BbTNj3R26_uXmLNsfYFWWeMlH0k20WpwF6huiYBxRBa8y4LC3KDdGaLHX0Nv5IRfjU8Z7bdthWJBodLdnbftTSB33cjpR4B2p1Ykw_6rg4Zr5gKqkC-2eJdXjZ6Uoqalhp2JmQ4dvKYU01VdiGdq-66elxZBU9M4CeZNVs-05akNUB2b1S488JNQZINcDc0uYE1hLOtupcj-3aT_j7-1jGCec2k9ktwUk4-a9ppyWENH9CRp1p-Q1vxRGxVkaOFYsaBV8oIcNY19KV-MIwMoZXMT6JCJq_xYAJLHHlC1YPUgJpDwb9EMGrMq_6yNG4bdDpQA-OhSz0EeFDXz8LwefZextiWfKlWr4tUXcavjlYrb02glVTPqTOz7lYRnF0bTccJUJ4roP7R25Cmmb2IZVgoArd0pWUgDImUvh2OVR-s1J7t3hjx_pRF4ss2pbKntotWUzWAfmKM7Ny3RcuQY7WLbF5K9d56wpj6Lbe5YzJVKjvXExL0PEu53DDk0vENwP-K65C6cuIZFuhc6Usxiu6vu27Kbyk_vkkvQIWF_-ayAUM5AHoxjacGIpT3Y-TVPIKBfRZ3DJbvKr2EKInor2owY1t-YDinmMCZAYtdLnaWlUH1rmvL7AfVpvWHnKwP1tsXAaq_f05_stgF6iWYhBVb22XZXVLmII47mv_9IhP75XXg9oZOEILPtIz1tJSLVZKfgTpMFUHU1nYCzbHpz7pDTLWMqK90juRi5A9CR6B5dqP0rRfbx44Ci0_TvZfh7EtDPdCte-e9yPSUpq8IiY-ahGrEcTiHP6YN5MjGZENzgiQisq0SwvWJfWyjrnTaBzeezYwSNFCoym2btoKwYDf8xY2de3gVWfoleb1QP2BA9kHYcN9wmfIt4P4lRdbw5oEltKXHiIGKHr-ePvCWPYCvmToEb3AkAgacrW_pNQyDWfYb2Hqc8h1ECUhNdXFQUw2PbfRXPGp9hf7qMZuLASvL3cCj9GRf2vV_=w418-h625-s-no?authuser=0" />
      ),
    },
  ];

  const threeGrid1 = images.slice(0, 4); // first 4 images
  const threeGrid2 = images.slice(4, 8); // second 4 images
  const threeGrid3 = images.slice(8, 12); // last 4 images

  const twoGrid1 = images.slice(0, 6); // first 6 images
  const twoGrid2 = images.slice(6, 12); // last 6 images

  const oneGrid = images.slice(0, 12);
  //
  return (
    <div className="grids_container">
      <div className="three_grids_container">
        <div className="images">
          {threeGrid1.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
        <div className="images">
          {threeGrid2.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
        <div className="images">
          {threeGrid3.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
      </div>

      <div className="two_grids_container">
        <div className="images">
          {twoGrid1.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
        <div className="images">
          {twoGrid2.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
      </div>

      <div className="one_grid_container">
        <div className="images">
          {oneGrid.map((image) => {
            return <>{image.img}</>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
