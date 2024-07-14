function ContactPage () {

    return (
        <>
            <form action="/info" method="POST">
        <fieldset>
            <legend>Tell us about yourself</legend>
            <p>
                <label for="firstLast">
                    First and Last Name
                    <input type="text"
                           name="firstLast"
                           id="firstLast"
                           size="30"
                           maxlength="100"
                           required
                           placeholder="First and last name"
                           autofocus />
                </label>
            </p>
            <p>
                <label for="email">
                    Email
                    <input type="email"
                           name="eAddress"
                           id="email"
                           size="30"
                           maxlength="100"
                           required
                           pattern="[^ @]+@[^ @]+\.[a-z]+"
                           placeholder="name@host.com" />
                </label>
            </p>
            <p>
                <label for="message">Is there anything would you like to tell us?
                    <textarea name="message"
                              id="message"
                              minlenth="3"
                              maxlenth="300"
                              required
                              placeholder="Write 300 characters or less."></textarea>
                </label>
                
            </p>
        </fieldset>
        <fieldset>
            <legend>Feel free to come back</legend>
            <label for="how">How did you hear about us?</label>
            <select name="hearUs" id="how">
                <option value="LinkedIn">LinkedIn</option>
                <option value="Indeed">Indeed</option>
                <option value="Instagram">Instagram</option>
                <option value="Colleague">Colleague</option>
                <option value="Other" selected>Other</option>
            </select>
            <p>
               
            </p>
            <p>
                <label for="linkedInUpdates">
                    <input type="checkbox" name="upToDate" id="linkedInUpdates" value= "Linkedin Updates" />
                    Notify me when linkedIn is updated
                </label>
            </p>
            <button type="submit">Submit review</button>

        </fieldset>
    </form>
        </>
    )
}

export default ContactPage;