function new_model(){
    var form = document.createElement('form')
    var fieldset = document.createElement('fieldset')
    fieldset.className = 'border_dashed'
    var legend = document.createElement('legend')
    legend.className = 'date'
    legend.innerHTML = '09/01/2019'
    var title = document.createElement('input')
    title.className = 'input_title'
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'Title')
    var para = document.createElement('textarea')
    para.setAttribute('placeholder', 'Your message here ...')
    var signature = document.createElement('input')
    signature.className = 'input_author'
    signature.setAttribute('type', 'text')
    signature.setAttribute('placeholder', 'Author')

    form.appendChild(fieldset)
    fieldset.appendChild(legend)
    fieldset.appendChild(title)
    fieldset.appendChild(para)
    fieldset.appendChild(signature)
    $('.container').append(form)

    $('.add_model').css('display', 'none')
    $('.cancel').css('display', 'block')
    $('.validate').css('display', 'block')
}
$('.add_model').on('click', new_model)