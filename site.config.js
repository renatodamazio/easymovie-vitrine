/**
 *
 * @author ak-code <alaunalkauniyyah3@gmail.com>
 * @copyright 2020 A.kauniyyah | Front-end Web developer
 *
 * ________________________________________________________________________________
 *
 * site.config.js
 *
 * The site configuration file.
 *
 */

const makeId = (length) => {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const DATA = {
  base: {
    static: 'static/',
    revid: makeId(8),
    title: 'EasyMovie | Plataforma de contratação e produção de vídeo',
    metaDesc:
      'Receba propostas em poucas horas para a criação do seu vídeo e contrate o produtor ideal. Encontre produtoras e profissionais de produção de vídeo.',
  },

  items: [
    {
      title: 'John Wick Chapter 4',
      category: 'animacao',
      url: 'john-wick',
      hash_tags: ['#editor', '#animação', '#livro', '#ilustração'],
      skills: ['Edição', 'Capitação', 'Iluminação'],
      tags: ['Institucional', 'livraria'],
      description: 'Lorem Ipsum',
      videoId: "https://customer-4tl6n57yx29lfuzn.cloudflarestream.com/1661365099dc9a0712dcb988762bbcf0/iframe?poster=https%3A%2F%2Fcustomer-4tl6n57yx29lfuzn.cloudflarestream.com%2F1661365099dc9a0712dcb988762bbcf0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D5s%26height%3D600",
      cover:
        'https://cdn.bhdw.net/im/john-wick-chapter-3-wallpaper-30271_w635.webp',
    },
    {
      title: 'Avengers',
      category: 'publicidade',
      url: 'avengers',
      hash_tags: ['#editor', '#animação', '#livro', '#ilustração'],
      skills: ['Edição', 'Capitação', 'Iluminação'],
      tags: ['Institucional', 'livraria'],
      videoId: "https://customer-4tl6n57yx29lfuzn.cloudflarestream.com/1661365099dc9a0712dcb988762bbcf0/iframe?poster=https%3A%2F%2Fcustomer-4tl6n57yx29lfuzn.cloudflarestream.com%2F1661365099dc9a0712dcb988762bbcf0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D5s%26height%3D600",
      description:
        'Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias.',
      cover:
        'https://i.pinimg.com/originals/62/5f/6b/625f6beceff0ba88f5787c20f1a202c6.jpg',
    },
    {
      title: 'Game of Thrones',
      category: 'edicao',
      url: 'game-of-thrones',
      hash_tags: ['#editor', '#animação', '#livro', '#ilustração'],
      skills: ['Edição', 'Capitação', 'Iluminação'],
      tags: ['Institucional', 'livraria'],
      videoId: "https://customer-4tl6n57yx29lfuzn.cloudflarestream.com/1661365099dc9a0712dcb988762bbcf0/iframe?poster=https%3A%2F%2Fcustomer-4tl6n57yx29lfuzn.cloudflarestream.com%2F1661365099dc9a0712dcb988762bbcf0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D5s%26height%3D600",
      description:
        'Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias. Graduanda em Comunicação Social - Publicidade e Propaganda pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Técnica em Administração pelo Instituto Federal de Minas Gerais (IFMG).Atuou como estagiária em comunicação das academias UAU Fit, criando conteúdos para web e redes sociais, conteúdos off-line e gerenciado mídias.',
      cover:
        'https://www.igeeksblog.com/wp-content/uploads/2021/03/Game-of-Thrones-Season-8-iPhone-Wallpaper.jpg',
    },
    {
      title: 'True Detective season 1',
      category: 'game-play',
      url: 'true-detective',
      hash_tags: ['#editor', '#animação', '#livro', '#ilustração'],
      skills: ['Edição', 'Capitação', 'Iluminação'],
      tags: ['Institucional', 'livraria'],
      description: 'Lorem Ipsum',
      videoId: "https://customer-4tl6n57yx29lfuzn.cloudflarestream.com/1661365099dc9a0712dcb988762bbcf0/iframe?poster=https%3A%2F%2Fcustomer-4tl6n57yx29lfuzn.cloudflarestream.com%2F1661365099dc9a0712dcb988762bbcf0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D5s%26height%3D600",

      cover: 'https://images7.alphacoders.com/645/645727.jpg',
    },
  ],
}


module.exports = {
  data: DATA,
}
