# Cloud Run Landingpage Teman Disabilitas Deployment

[![Run in Google Cloud][run_img]][run_link]

[run_img]: https://storage.googleapis.com/cloudrun/button.svg
[run_link]: https://console.cloud.google.com/cloudshell/editor?shellonly=true&cloudshell_image=gcr.io/cloudrun/button&cloudshell_git_repo=https://github.com/hzlnqodrey/landingpage-temandisabilitas-cloudrun-deployment-development.git&cloudshell_working_dir=run/landingpage-tedi

## Build and  Run Locally (You may expose the image first, with '-p' flag)

```
docker build --t landingpage-tedi:node .
docker run --rm -p 9090:8080 -e PORT=8080 landingpage-tedi:node
```

## Test

```
export SERVICE_NAME=landingpage-tedi
export CONTAINER_IMAGE=gcr.io/${GOOGLE_CLOUD_PROJECT}/landingpage-tedi
npm run e2e-test
```

## Deploy

```sh
# Set an environment variable with your GCP Project ID
export GOOGLE_CLOUD_PROJECT=<PROJECT_ID>

# Submit a build using Google Cloud Build
gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/landingpage-tedi

# Deploy to Cloud Run
gcloud run deploy landingpage-tedi \
--image gcr.io/${GOOGLE_CLOUD_PROJECT}/landingpage-tedi
```

## Pull by Tag
```sh
docker pull gcr.io/tedi-backend-web/landingpage-tedi:v1
```

## Pull by Digest
```sh
docker pull gcr.io/tedi-backend-web/landingpage-tedi@sha256:2296bb4b07f6ccfdee03ea2f4a216c12b09066ec370ddb42c4ebda25a2269bc2
```
