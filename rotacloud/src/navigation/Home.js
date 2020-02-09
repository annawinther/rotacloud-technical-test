import React from 'react'

export default function Home() {
    return (
         <section id="home">

            <h1>The Challenge</h1>

            <p>
                Thank you for taking the RotaCloud Angular challenge!
            </p>

            <p>
                The task is to load data from two JSON files (using HTTP), relate the data, and display as per the example tables on both the <a href='/users'>users</a> and <a href="/roles">roles</a> pages. The final solution should look identical to the examples, there are no HTML or CSS changes needed.
            </p>

            <p>
                The <code>name</code> column on both pages should consist of editable inputs. On the users page, the roles should be coloured as per their <code>colour</code> property and ordered by <code>name</code>. On the roles page, role names should be coloured accordingly and users should be ordered by <code>name</code>.
            </p>

            <p>
                All changes to inputs should be reflected across both pages immediately, and both tables should be ordered by <code>name</code> and continue to order following updates.
            </p>

            <p>
                Please complete the challenge in a GitHub repo and invite 'david-brandon' as a collaborator upon completion. If you have any questions, please email <a href="mailto:dev@rotacloud.com">dev@rotacloud.com</a>.
            </p>



            <h2>Important Info</h2>

            <p>
                The JSON data for the users is located at:<br />
                <a href="https://custom.rotacloud.com/angular-challenge/users.json" target="_blank">https://custom.rotacloud.com/angular-challenge/users.json</a>
            </p>

            <p>
                The JSON data for the roles is located at:<br />
                <a href="https://custom.rotacloud.com/angular-challenge/roles.json" target="_blank">https://custom.rotacloud.com/angular-challenge/roles.json</a>
            </p>

    </section>
    )
}
