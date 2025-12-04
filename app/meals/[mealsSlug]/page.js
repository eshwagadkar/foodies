import Image from 'next/image'
import { notFound } from 'next/navigation'

import { getMeal } from '@/lib/meals'
import classes from './page.module.css'

export async function generateMetadata({ params }) {

    const {mealsSlug} = await params
    const meal = getMeal(mealsSlug)

    if (!meal) { 
        notFound()
        
        // OR:
        // return {
        //     title: 'Meal Not Found',
        //     description: 'This meal does not exist.'
        // }
    }

    return {
        title: meal.title,
        description: meal.summary
    }
}

export default async function MealDetailsPage({ params }) {

    const {mealsSlug} = await params
    const meal = getMeal(mealsSlug)

    if(!meal){notFound()}

    meal.instructions = meal.instructions.replace(/\n/g, '<br />')

    return <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image fill
                    src={`https://eshwa-gadkar-next-js-app-images.s3.ap-south-1.amazonaws.com/${meal.image}`} 
                    alt={meal.title}
                />
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        
        <main>
            <p className={classes.instructions}
               dangerouslySetInnerHTML={{
                __html: meal.instructions
               }}
            ></p>
        </main>
    </>
}