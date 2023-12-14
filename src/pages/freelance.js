import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '@/styles/Freelance.module.css'


/*

    If you are looking at this as reference for my skills, don't lol. I was very lazy making this basic website.
    Please excuse the absolute nastiness that is this code. Thanks

*/


export default function Home() {
    // See, why is this even still here? I don't know but I'm leaving it
    const [plan, setPlan] = useState("basic-landing")
    // Why didn't I just make an object with all the info? The world may never know
    const [prices, setPrices] = useState({
        base: 200,
        ui: 0,
        backend: 0,
    })
    // Ah yes, a third state object, for added effect!
    const [planInfo, setPlanInfo] = useState({
        plan: "basic-landing",
        title: "Basic Landing Site",
        base: 200,
        ui: "reg",
        estimate: 200,
    })


    const handleSelect = (e) => {
        // Have fun trying to read this, I warned you...
        let planTitle
        let planBase

        switch (e.target.value) {
            case "basic-landing":
                planTitle = "Basic Landing Site"
                planBase = 200
                break
            case "basic-backend":
                planTitle = "Basic Site w/ Basic Backend"
                planBase = 400
                break
            case "mid-level":
                planTitle = "Mid-Level Site w/ Backend"
                planBase = 700
                break
            case "high-level":
                planTitle = "High-Level Site w/ Complex Backend"
                planBase = 1000
                break
            case "top-level":
                planTitle = "Top-Level Site w/ Extensive Backend"
                planBase = 1500
                break
            default:
                planTitle = "Basic Landing Site"
                break
        }
        setPlan(e.target.value)
        setPlanInfo({
            plan: e.target.value,
            title: planTitle,
            base: planBase,
            ui: "reg",
            estimate: planBase
        })

        handleEstimate(planBase, "base")

        if (e.target.value === "basic-landing") {
            setPrices({
                ...prices,
                base: 200,
                backend: 0,
            })
        }
    }

    const handlePlanInfo = (e, key) => {
        setPlanInfo({
            ...planInfo,
            [key]: e.target.value
        })

        handleEstimate(e, key)
    }

    const handleEstimate = (e, key) => {
        // I call this one the Bird's Nest
        if (key === "base") {
            setPrices({
                ...prices,
                base: e,
            })
        } else if (key === "ui") {
            switch (e.target.value) {
                case "reg":
                    setPrices({
                        ...prices,
                        ui: 0,
                    })
                    break
                case "mid":
                    setPrices({
                        ...prices,
                        ui: 50,
                    })
                    break
                case "high":
                    setPrices({
                        ...prices,
                        ui: 100,
                    })
                    break
                case "custom":
                    setPrices({
                        ...prices,
                        ui: 150,
                    })
                    break
                default:
                    break
            }
        } else if (key === "backend") {
            switch (e.target.value) {
                case "reg":
                    setPrices({
                        ...prices,
                        backend: 0,
                    })
                    break
                case "mid":
                    setPrices({
                        ...prices,
                        backend: 100,
                    })
                    break
                case "custom":
                    setPrices({
                        ...prices,
                        backend: 200,
                    })
                    break
                default:
                    break
            }
        }
    }


  return (
    <>
      <Head>
        <title>Freelance | Karsten Koerner</title>
        <meta name="description" content="Freelance Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo.png"
                alt="Karsten Koerner Portfolio Logo"
                className={styles.logo}
                width={200}
                height={200}
              />
            </div>
            <div className={styles.menuWrapper}>
              <div className={styles.menu}>
                <Link href="/" className={styles.menuBtn}>
                  Home
                </Link>
                <Link href="/skills" className={styles.menuBtn}>
                  Skills
                </Link>
                <Link href="/portfolio" className={styles.menuBtn}>
                  Portfolio
                </Link>
                <Link href="/freelance" className={styles.menuBtn}>
                  Freelance
                </Link>
                <Link href="/contact" className={styles.menuBtn}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.pageContent}>
            <div className={styles.form}>
                <h2 className={styles.formTitle}>
                    Project Cost Estimate
                </h2>
                <select onChange={(e) => handleSelect(e)}>
                    <option value="basic-landing">Basic Landing Site &#40;Base: $200&#41;</option>
                    <option value="basic-backend">Basic Site w/ Basic Backend &#40;Base: $400&#41;</option>
                    <option value="mid-level">Mid-Level Site w/ Backend &#40;Base: $700&#41;</option>
                    <option value="high-level">High-Level Site w/ Complex Backend &#40;Base: $1,000&#41;</option>
                    <option value="top-level">Top-Level Site w/ Extensive Backend &#40;Base: $1,500&#41;</option>
                </select>
                <h4 className={styles.planInfoTitle}>
                    {planInfo.title}:
                </h4>
                <p className={styles.planInfoBase}>
                    Base Price: ${planInfo.base}.00 USD
                </p>
                <h4 className={styles.planInfoSelectTitle}>
                    UI/UX:
                </h4>
                <select onChange={(e) => handlePlanInfo(e, "ui")}>
                    <option value="reg">Regular - Basic UI/UX Design Choices &#40;+$0.00&#41;</option>
                    <option value="mid">Mid-Level - More Complex UI/UX Design Choices &#40;+$50.00&#41;</option>
                    <option value="high">High-Level - Best UI/UX Design Choices &#40;+$100.00&#41;</option>
                    <option value="custom">Custom - Customized UI/UX Design Choices &#40;+$150.00&#41;</option>
                </select>
                {plan !== 'basic-landing' && (
                    <>
                        <h4 className={styles.planInfoSelectTitle}>
                            Backend Systems:
                        </h4>
                        <select onChange={(e) => handlePlanInfo(e, "backend")}>
                            <option value="reg">Regular - Standard Systems Integration &#40;+$0.00&#41;</option>
                            <option value="mid">Dynamic - Robust Systems Integration &#40;+$100.00&#41;</option>
                            <option value="custom">Custom - Integrate old systems, etc. &#40;+$200.00&#41;</option>
                        </select>
                    </>
                )}
                <h4 className={styles.planInfoEstimate}>
                    Estimated Subtotal: ${prices.base + prices.ui + prices.backend}.00 USD
                </h4>
                <Link href="/contact" className={styles.link}>
                    Contact me to inquire
                </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}