export const AppConfig = {
    name: 'David Estiven Velez Gonzalez',
    title: 'Full Stack .NET Developer | Enterprise Application Modernization',
    email: 'd.velezcorrea1999@gmail.com',
    linkedin: 'https://linkedin.com/in/davidevelezg',
    github: 'https://github.com/DavidV-2',
    cvFileId: '1o8N6wEcv-UvaJIfYoE664vLunLCBMKmF', // Configurable
    cvDownloadUrl: 'https://drive.google.com/uc?export=download&id=',

    
    getCvUrl: function () {
        return this.cvDownloadUrl + this.cvFileId;
    }
}