export function Contact() {
  return (
    <div className='container-fluid'>
      <h1>Contacter moi</h1>
      <div className='row'>
        <div className='col-md-4'>
          <h2 className='text-center'>Ma carte de visite</h2>
          <address className='d-flex flex-column text-left'>
            <a href='mailto:john.doe@mail.com'>john.doe@mail.com</a>
            <a href='tel:+33606060606'>+33606060606</a>
            <p>
              <i className='bi bi-mailbox-flag'></i> 155 All. du Phare, 17590
              Saint-Clément-des-Baleines
            </p>
            <iframe
            className="text-center"
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13510.332115548343!2d-1.5698937269529876!3d46.24341715538101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48040b01e5f16e7f%3A0xb4c89eec66046d9e!2sPhare%20des%20Baleines!5e0!3m2!1sfr!2sfr!4v1697571313232!5m2!1sfr!2sfr'
              width='200'
              height='300'
              style={{border:'0'}}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </address>
        </div>
        <div className='col-md-6'>
          <h2>Nous écrire</h2>
          <form>
            <div className='mb-3'>
              <label
                htmlFor='name'
                className='form-label'
              >
                Nom
              </label>
              <input
                type='text'
                className='form-control'
                name=''
                id='name'
              />
              <label
                htmlFor='email'
                className='form-label'
              >
                Adresse mail
              </label>
              <input
                type='email'
                className='form-control'
                name=''
                id='email'
                aria-describedby='emailHelp'
              />
              <label
                htmlFor='telephone'
                className='form-label'
              >
                Téléphone
              </label>
              <input
                type='tel'
                className='form-control'
                id='telephone'
              />
              <label
                htmlFor='message'
                className='form-label'
              >
                Message
              </label>
              <textarea
                className='form-control'
                name=''
                id='message'
                cols='30'
                rows='5'
              />
              <button
                className='btn btn-primary my-3'
                type='submit'
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
