# BrainFX Marketplace Netlify Drop

This folder is ready for Netlify Drop.

## Publish

1. Open https://app.netlify.com/drop
2. Drag the full `netlify-drop` folder into the upload area.
3. Netlify will give you a live `netlify.app` link.
4. Add that live link to the main BrainFX website as the Marketplace button.

## Pages

- `index.html` - Marketplace landing page
- `profiles.html` - combined clinicians and clinics directory
- `clinicians.html` - Verified clinicians
- `clinics.html` - Verified clinics
- `find-care.html` - Search and map view
- `create-profile.html` - clinician and clinic profile request form
- `admin.html` - private owner admin

## Leads

Booking requests are wired for Netlify Forms with the form name `brainfx-lead`. Clinician and clinic profile requests are wired as `brainfx-profile-request`. After publishing, open the Netlify site dashboard and check Forms to view submissions.

The private admin page stores lead and profile management changes in the browser for this static version. Netlify Forms remains the source for submitted leads and profile requests after publishing.
