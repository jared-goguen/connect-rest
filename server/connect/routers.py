from django.conf.urls import url

from rest_framework.routers import DefaultRouter, format_suffix_patterns

class RedirectAPIRootRouter(DefaultRouter):
    def __init__(self, root_url='^$', *args, **kwargs):
        super(RedirectAPIRootRouter, self).__init__(*args, **kwargs)
        self.root_url = root_url

    def get_urls(self):
        """
        Generate the list of URL patterns, including a default root view
        for the API, and appending `.json` style format suffixes.
        """

        # don't change to use current class else the json suffixes get appended twice
        urls = super(DefaultRouter, self).get_urls()

        if self.include_root_view:
            if self.schema_title:
                view = self.get_schema_root_view(api_urls=urls)
            else:
                view = self.get_api_root_view(api_urls=urls)

            # this is the only thing changed!
            root_url = url(self.root_url, view, name=self.root_view_name)
            urls.append(root_url)

        if self.include_format_suffixes:
            urls = format_suffix_patterns(urls)

        return urls