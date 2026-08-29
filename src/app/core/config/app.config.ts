export const AppConfig = {
    name: 'David Estiven Velez Gonzalez',
    title: 'Full Stack .NET Developer | Enterprise Application Modernization',
    email: 'd.velezcorrea1999@gmail.com',
    linkedin: 'https://linkedin.com/in/davidevelezg',
    github: 'https://github.com/DavidV-2',
    cvFileId: '1te5ByGp788KX1dtbkzhXkBw_5Shn-cRw',
    scriptAppUrl: 'https://script.google.com/macros/s/AKfycbz45AgOkmZ7twr8kPoYH2qJRtcfoH1aHW8EF0PSLMTzFPtkI6s2WUkljemrnru7JmLB/exec',
    cvDownloadUrl: 'https://drive.google.com/uc?export=download&id=',

    getCvUrl: function () {
        return this.cvDownloadUrl + this.cvFileId;
    }
};