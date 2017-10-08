# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.decorators import api_view
from django.http import JsonResponse

import random

@api_view(['POST'])
def get_move(request):
    board = request.data['board']

    moves = [(ir, ic) for ir, r in enumerate(board) for ic, c in enumerate(r) if c['playable']]

    row, col = random.choice(moves)

    return JsonResponse({'row': row, 'col': col})
