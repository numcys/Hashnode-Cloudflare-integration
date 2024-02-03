const Handlebars = require('handlebars');

//helper functions for formatting
Handlebars.registerHelper('formatDate', (timestamp) => {
    formatDate: (timestamp) => {
        return moment(timestamp).format('MMMM Do, YYYY');
    }      
  return new Date(timestamp).toLocaleDateString();
});

Handlebars.registerHelper('formatMarkdown', (markdown) => {
    formatMarkdown: (markdown) => {
        return marked(markdown);
      }      
  return marked(markdown); 
});

module.exports = {
    generateHtml: (posts) => {
  const template = readFile('./templates/blog-posts.html', 'utf8');
  const compiledTemplate = Handlebars.compile(template);
  const html = compiledTemplate({ posts });
  return html;
} };
